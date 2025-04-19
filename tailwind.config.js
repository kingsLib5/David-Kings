// module.exports = {
//     theme: {
//       extend: {
//         colors: {
//           primary: {
//             light: '#38bdf8',
//             DEFAULT: '#0ea5e9',
//             dark: '#0369a1'
//           },
//           secondary: {
//             light: '#c4b5fd',
//             DEFAULT: '#a78bfa',
//             dark: '#7c3aed'
//           },
//           accent: {
//             light: '#22d3ee',
//             DEFAULT: '#06b6d4',
//             dark: '#0e7490'
//           }
//         },
//         backdropBlur: {
//           lg: '24px',
//         },
//         dropShadow: {
//           'glow': ['0 0 8px rgba(14, 165, 233, 0.6)', '0 0 10px rgba(59, 130, 246, 0.5)']
//         },
//         keyframes: {
//           float: {
//             '0%, 100%': { transform: 'translateY(0)' },
//             '50%': { transform: 'translateY(-5px)' }
//           },
//           ping: {
//             '75%, 100%': { transform: 'scale(1.5)', opacity: '0' }
//           },
//           'gradient-x': {
//             '0%, 100%': { 'background-position': '0% 50%' },
//             '50%': { 'background-position': '100% 50%' }
//           },
//           spin: {
//             from: { transform: 'rotate(0deg)' },
//             to: { transform: 'rotate(360deg)' }
//           }
//         },
//         animation: {
//           float: 'float 3s ease-in-out infinite',
//           ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
//           'gradient-x': 'gradient-x 8s ease infinite',
//           'spin-slow': 'spin 20s linear infinite'
//         },
//         perspective: {
//           1000: '1000px',
//           2000: '2000px'
//         },
//         rotate: {
//           'y-180': 'rotateY(180deg)',
//           'y-90': 'rotateY(90deg)',
//           'x-180': 'rotateX(180deg)'
//         },
//         transformStyle: {
//           'preserve-3d': 'preserve-3d'
//         },
//         backfaceVisibility: {
//           hidden: 'hidden'
//         }
//       }
//     },
//     darkMode: 'class',
//     plugins: [
//       require('tailwindcss-3d'),
//       require('tailwindcss-animation-delay')
//     ]
//   }