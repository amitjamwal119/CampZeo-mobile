import { createTamagui, createTokens, createFont } from 'tamagui'

// 1️⃣ Tokens must include a $true base size
const tokens = createTokens({
  color: {
    white: '#ffffff',
    black: '#000000',
    borderColor: '#e5e5e5',
    // ✅ Add a simple blue scale
    blue1: '#EAF3FF',
    blue3: '#A9CCFF',
    blue5: '#5A9BFF',
    blue6: '#2D7EFF',
    blue7: '#0066D6',
    blue9: '#0047A0',
    blue10: '#00367A',

    // ✅ Add a green scale
    green5: '#7ED957',
    green6: '#5FCF3D',
    green7: '#43B82A',
    green9: '#319A20',
    green10: '#257A19',
  },
  light: {
    background: '#FFFFFF',
    color: '#000000',
    borderColor: '#E5E5E5',
    primary: '#2D7EFF',
    success: '#43B82A',
    danger: '#FF3B30',
    muted: '#F8F9FA',
  },
  dark: {
    background: '#000000',
    color: '#FFFFFF',
    borderColor: '#444444',
    primary: '#0A84FF',
    success: '#30D158',
    danger: '#FF453A',
    muted: '#1A1A1A',
  },

 

  // 🟢 Spacing tokens (margin, padding, gaps)
  space: {
    0: 0,
    1: 6,
    2: 12,
    3: 18,
    4: 24,
    5: 32,
    6: 40,
    7: 48,
    true: 12, // base size for scaling ($true)
  },

  // 🟢 Size tokens (widths, heights, icons, text)
  size: {
    0: 0,
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    true: 16, // base element size
  },

  // 🟢 Border radius tokens (rounded corners)
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    true: 8, // default radius
  },

  // 🟢 Z-index tokens (for layering)
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    6: 100,
    true: 10,
  },
})

const fonts = {
  body: createFont({
    family: 'System',
    size: { 1: 12, 2: 14, 3: 16, 4: 18, 5: 20, 6: 24, true: 16 },
    lineHeight: { 1: 18, 2: 20, 3: 24, 4: 28, 5: 32, 6: 36, true: 24 },
    weight: { 1: '400', 2: '500', 3: '600', 4: '700', true: '500' },
    letterSpacing: { 1: 0, 2: 0.2, 3: 0.3, 4: 0.4, true: 0 },
  }),
}

// 2️⃣ Themes need a color + background at minimum
const themes = {
  light: {
    background: '#FFFFFF',
    color: '#000000',
    borderColor: '#E5E5E5',
  },
  dark: {
    background: '#000000',
    color: '#FFFFFF',
    borderColor: '#444444',
  },
}

// 3️⃣ Always create config first and export separately
const config = createTamagui({
  tokens,
  themes,
  fonts,
  defaultTheme: 'light',
})

// 4️⃣ Export the config as default
export type AppConfig = typeof config
export default config
