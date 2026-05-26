/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loadingBar: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          'from': { transform: 'translateY(16px)', opacity: '0' },
          'to':   { transform: 'translateY(0)',    opacity: '1' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59,130,246,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(59,130,246,0)' },
        },
        // Sprite blinks rapidly then sinks down
        spriteFaint: {
          '0%':   { opacity: '1',   transform: 'translateY(0)' },
          '12%':  { opacity: '0.05',transform: 'translateY(0)' },
          '24%':  { opacity: '1',   transform: 'translateY(0)' },
          '36%':  { opacity: '0.05',transform: 'translateY(0)' },
          '48%':  { opacity: '1',   transform: 'translateY(0)' },
          '60%':  { opacity: '0.15',transform: 'translateY(0)' },
          '75%':  { opacity: '0',   transform: 'translateY(12px)' },
          '100%': { opacity: '0',   transform: 'translateY(52px)' },
        },
        // Enemy slides in from right
        spriteEnterEnemy: {
          'from': { opacity: '0', transform: 'translateX(70px)' },
          'to':   { opacity: '1', transform: 'translateX(0)' },
        },
        // Player slides in from left
        spriteEnterPlayer: {
          'from': { opacity: '0', transform: 'translateX(-70px)' },
          'to':   { opacity: '1', transform: 'translateX(0)' },
        },
        // HP bar flashes white when hit
        hpFlash: {
          '0%':   { filter: 'brightness(1)' },
          '40%':  { filter: 'brightness(3)' },
          '100%': { filter: 'brightness(1)' },
        },
        // Message box slides up from below
        msgSlideUp: {
          'from': { transform: 'translateY(12px)', opacity: '0' },
          'to':   { transform: 'translateY(0)',    opacity: '1' },
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)' },
          'to':   { transform: 'translateX(0)' },
        },
        slideOutRight: {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(100%)' },
        },
      },
      animation: {
        loadingBar:        'loadingBar 2s ease-in-out infinite',
        float:             'float 3s ease-in-out infinite',
        fadeInUp:          'fadeInUp 0.35s ease-out forwards',
        'pulse-blue':      'pulseBlue 2s infinite',
        spriteFaint:       'spriteFaint 1.3s ease-in forwards',
        spriteEnterEnemy:  'spriteEnterEnemy 0.65s ease-out forwards',
        spriteEnterPlayer: 'spriteEnterPlayer 0.65s ease-out forwards',
        hpFlash:           'hpFlash 0.4s ease-out',
        msgSlideUp:        'msgSlideUp 0.25s ease-out forwards',
        slideInRight:      'slideInRight 0.3s ease-out forwards',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
}
