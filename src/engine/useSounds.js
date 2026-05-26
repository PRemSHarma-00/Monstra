/**
 * useSounds.js — React hook for the sound engine + background music.
 *
 * Background music:
 *   - Loaded from /public via an HTMLAudioElement (loops automatically)
 *   - Fades out smoothly when the battle ends
 *   - Respects the global mute toggle
 *
 * Usage:
 *   const { muted, toggleMute, startBgMusic, stopBgMusic, playHit, ... } = useSounds();
 */

import { useRef, useState, useEffect, useCallback } from 'react';
import {
  playSelect      as _playSelect,
  playHit         as _playHit,
  playFaint       as _playFaint,
  playEnter       as _playEnter,
  playVictory     as _playVictory,
  playDefeat      as _playDefeat,
  playBattleStart as _playBattleStart,
} from './sounds';

const BG_MUSIC_SRC = '/music/battle_theme.mp3'; // path inside /public

const useSounds = () => {
  const [muted, setMuted] = useState(false);
  const mutedRef  = useRef(false);  // ref so timeout closures always read latest value
  const bgAudioRef = useRef(null);  // the HTMLAudioElement for bg music
  const fadeRef    = useRef(null);  // setInterval handle for fade-out

  // ── Create the Audio element once ─────────────────────────────────────────
  useEffect(() => {
    const audio = new Audio(BG_MUSIC_SRC);
    audio.loop   = true;
    audio.volume = 0.35;  // comfortable background level (0–1)
    bgAudioRef.current = audio;

    // Clean up when the component using this hook unmounts
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // ── Mute toggle ────────────────────────────────────────────────────────────
  const toggleMute = useCallback(() => {
    mutedRef.current = !mutedRef.current;
    setMuted(m => !m);

    const audio = bgAudioRef.current;
    if (!audio) return;

    if (mutedRef.current) {
      audio.volume = 0;
    } else {
      audio.volume = 0.35;
    }
  }, []);

  // ── Background music controls ──────────────────────────────────────────────

  /** Start looping bg music from the beginning */
  const startBgMusic = useCallback(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;
    if (mutedRef.current) return; // respect mute
    audio.currentTime = 0;
    audio.volume = 0.35;
    audio.play().catch(() => {
      // Browser may block autoplay — the user gesture from clicking a move
      // should unlock it. We silently ignore the error here.
    });
  }, []);

  /**
   * Fade out bg music over `durationMs` milliseconds, then pause.
   * Call this when the battle ends.
   */
  const stopBgMusic = useCallback((durationMs = 1500) => {
    const audio = bgAudioRef.current;
    if (!audio) return;

    // Clear any existing fade
    if (fadeRef.current) clearInterval(fadeRef.current);

    const startVol  = audio.volume;
    const steps     = 30;
    const stepMs    = durationMs / steps;
    const stepSize  = startVol / steps;
    let   remaining = steps;

    fadeRef.current = setInterval(() => {
      remaining--;
      audio.volume = Math.max(0, audio.volume - stepSize);
      if (remaining <= 0) {
        clearInterval(fadeRef.current);
        audio.pause();
        audio.volume = 0.35; // reset for next battle
      }
    }, stepMs);
  }, []);

  // ── Guard: wrap an SFX function — no-op when muted ────────────────────────
  const g = (fn) => (...args) => {
    if (!mutedRef.current) fn(...args);
  };

  return {
    muted,
    toggleMute,
    startBgMusic,
    stopBgMusic,
    playSelect:      g(_playSelect),
    playHit:         g(_playHit),
    playFaint:       g(_playFaint),
    playEnter:       g(_playEnter),
    playVictory:     g(_playVictory),
    playDefeat:      g(_playDefeat),
    playBattleStart: g(_playBattleStart),
  };
};

export default useSounds;
