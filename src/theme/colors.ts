/**
 * Common color palette - use these everywhere for consistency
 */

export const Colors = {
  // Primary / Accent (Teal family)
  // primary: '#1CB1BA',
  primary: '#7c3aed',
  primaryDark: '#16939A',
  primaryLight: '#1EB2BC',
  primaryBorder: '#20BBC3',
  accent: '#23B8BF',

  // Backgrounds
  white: '#fff',
  background: '#fff',
  inputBackground: '#F8F8F8',
  cardBackground: '#DFF3F6',
  overlay: 'rgba(0,0,0,0.4)',
  bottomNavBar: 'rgba(255,255,255,0.2)',

  // Text
  text: '#070707',
  textDark: '#000',
  textMuted: '#777',
  placeholder: '#A0A0A0',
  textSecondary: '#B7B7B7',

  // Misc
  grey: '#9E9E9E',
  whiteText: '#fff',
} as const

export type ColorKey = keyof typeof Colors
