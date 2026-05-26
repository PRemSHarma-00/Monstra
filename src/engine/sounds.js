/**
 * sounds.js — Programmatic 8-bit sound effects via Web Audio API
 *
 * All sounds are generated entirely in JS — no audio files needed.
 * A single AudioContext is lazily created and reused.
 */

let _ctx = null;

/** Get (or lazily create) the shared AudioContext */
const getCtx = () => {
  if (!_ctx) {
    _ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Browser suspends AudioContext until a user gesture — resume it
  if (_ctx.state === 'suspended') _ctx.resume();
  return _ctx;
};

/**
 * Play a single tone.
 * @param {number}  freq      - Start frequency in Hz
 * @param {string}  type      - OscillatorType ('square' | 'sine' | 'triangle' | 'sawtooth')
 * @param {number}  duration  - Duration in seconds
 * @param {number}  vol       - Peak gain (0–1)
 * @param {number}  startTime - ctx.currentTime offset
 * @param {AudioContext} ctx
 * @param {number}  [freqEnd] - Optional: frequency to ramp to (exponential)
 */
const tone = (freq, type, duration, vol, startTime, ctx, freqEnd = null) => {
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  if (freqEnd) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 0.01), startTime + duration);
  }

  gain.gain.setValueAtTime(vol, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.01);
};

// ─────────────────────────────────────────────────────────────────────────────
// Sound definitions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Soft click when selecting a move button.
 * Very short square blip at 440 Hz.
 */
export const playSelect = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  tone(440, 'square', 0.05, 0.12, t, ctx);
};

/**
 * Hit sound — a sharp thud with a noise burst.
 * Square wave drops from 320 → 60 Hz over 130 ms,
 * layered with a short white-noise burst for impact.
 */
export const playHit = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;

  // Descending tone (the "thud")
  tone(320, 'square', 0.14, 0.22, t, ctx, 60);

  // White-noise burst layered on top
  const bufSize = Math.floor(ctx.sampleRate * 0.08);
  const buffer  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data    = buffer.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;

  const noise  = ctx.createBufferSource();
  noise.buffer = buffer;

  const nGain = ctx.createGain();
  nGain.gain.setValueAtTime(0.08, t);
  nGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);

  noise.connect(nGain);
  nGain.connect(ctx.destination);
  noise.start(t);
};

/**
 * Faint sound — a long descending tone.
 * Square wave falls from 400 → 40 Hz over ~1.2 s, fading out.
 */
export const playFaint = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'square';
  osc.frequency.setValueAtTime(400, t);
  osc.frequency.exponentialRampToValueAtTime(40, t + 1.2);

  gain.gain.setValueAtTime(0.18, t);
  gain.gain.setValueAtTime(0.18, t + 0.7);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);

  osc.start(t);
  osc.stop(t + 1.35);
};

/**
 * Enter sound — a quick two-note rising ping.
 * Signals a new monster coming onto the field.
 */
export const playEnter = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  tone(370, 'square', 0.08, 0.18, t,        ctx);
  tone(554, 'square', 0.10, 0.18, t + 0.09, ctx);
};

/**
 * Victory fanfare — a 4-note ascending arpeggio.
 * Notes: C5 → E5 → G5 → C6 (happy major chord)
 */
export const playVictory = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
  notes.forEach((freq, i) => {
    tone(freq, 'square', 0.20, 0.18, t + i * 0.18, ctx);
  });
};

/**
 * Defeat sound — a 4-note descending arpeggio.
 * Notes: C5 → A4 → F4 → C4 (sad minor feel)
 */
export const playDefeat = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  const notes = [523, 440, 349, 262]; // C5 A4 F4 C4
  notes.forEach((freq, i) => {
    tone(freq, 'square', 0.28, 0.14, t + i * 0.28, ctx);
  });
};

/**
 * Battle start — a short 3-note intro jingle.
 */
export const playBattleStart = () => {
  const ctx = getCtx();
  const t = ctx.currentTime;
  tone(392, 'square', 0.10, 0.15, t,        ctx); // G4
  tone(523, 'square', 0.10, 0.15, t + 0.12, ctx); // C5
  tone(659, 'square', 0.18, 0.18, t + 0.24, ctx); // E5
};
