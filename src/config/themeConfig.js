// Color roles: cream #f0e7de = canvas; soft purple #e7d0f5 = primary lavender (fills, buttons, bands);
// gold-dark #d4bae8 = one-step-deeper hint for borders/lines/headings on cream (same family, not a second “violet” theme);
// plum #3a3148 = body text & strong UI. Avoid leaning on wedding-500 for large areas — it reads as bright violet against cream.
export const themeConfig = {
    backgrounds: {
        primary: 'bg-forest',
        secondary: 'bg-gold',
        accent: 'bg-gold',
        light: 'bg-white/50',
        theme: 'bg-sage',
        garden: 'bg-sage',
        crumpledPaper: 'bg-[url("/assets/images/crumpled-paper.png")] bg-cover bg-center bg-no-repeat',
    },

    text: {
        primary: 'text-forest',
        secondary: 'text-wedding-600',
        accent: 'text-gold-dark',
        muted: 'text-wedding-600/90',
        dark: 'text-forest',
        theme: 'text-gold-dark',
        pause: 'text-white',
        custom: 'text-obsidian',
        light: '#d4bae8',
        lightBlack: '#3a3148',
        cream: '#f0e7de',
        tan: '#e7d0f5',
        wine: '#3a3148',
        burgundyDark: '#3a3148',
        burntOrange: '#3a3148',
        sageGreen: '#3a3148',
    },

    borders: {
        primary: 'border-forest',
        secondary: 'border-gold-dark/50',
        accent: 'border-wedding-400',
        theme: 'border-wedding-300/80',
        garden: 'border-wedding-300/80',
    },

    buttons: {
        primary: 'bg-forest hover:bg-wedding-800',
        secondary: 'border border-wedding-500 hover:border-forest',
        text: 'text-forest hover:text-white',
        theme: 'bg-gold text-[#fff4e6] hover:bg-gold-dark hover:text-[#fff4e6]',
        garden: 'bg-gold/90 text-[#fff4e6] hover:bg-gold hover:text-[#fff4e6]',
    },

    hover: {
        primary: 'hover:bg-wedding-800',
        secondary: 'hover:border-forest hover:text-white',
        theme: 'hover:bg-gold-dark',
        garden: 'hover:bg-gold',
    },

    container: {
        maxWidth: 'max-w-[1300px]',
        padding: 'px-4 sm:px-6 lg:px-8',
        center: 'mx-auto',
    },

    calendar: {
        weddingDate: '2026-05-23',
        highlightColor: 'bg-gold',
        heartColor: 'text-forest',
        textColor: 'text-forest',
        headerColor: 'text-wedding-600',
        dayNamesColor: 'text-wedding-600',
        background: 'bg-sage',
    },

    paragraph: {
        background: 'bg-sage',
        garden: 'bg-sage',
    },

    cssVariables: {
        '--primary-bg': '#3a3148',
        '--secondary-bg': '#e7d0f5',
        '--accent-bg': '#3a3148',
        '--accent-hover': '#d4bae8',
        '--primary-text': '#000000',
        '--secondary-text': '#7a6299',
        '--accent-text': '#d4bae8',
        '--muted-text': '#7a6299',
        '--border-color': '#3a3148',
        '--custom-theme': '#3a3148',
        '--cream': '#f0e7de',
        '--tan': '#e7d0f5',
        '--wine': '#3a3148',
        '--burgundy-dark': '#3a3148',
        '--garden-bg': '#f0e7de',
    }
}

export const themePresets = {
    darkElegant: {
        backgrounds: {
            primary: 'bg-forest',
            secondary: 'bg-gold',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-white',
            secondary: 'text-gold',
            accent: 'text-gold',
        }
    },

    lightRomantic: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-white',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-wedding-600',
            accent: 'text-gold-dark',
        }
    },

    warmAutumn: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-gold/40',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-wedding-600',
            accent: 'text-gold-dark',
        }
    },

    gardenWedding: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-white',
            accent: 'bg-gold',
            theme: 'bg-sage',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-wedding-600',
            accent: 'text-gold-dark',
            garden: 'text-gold-dark',
        }
    }
}

export const getThemeColor = (type, variant = 'primary') => {
    return themeConfig[type]?.[variant] || themeConfig.text.primary
}

export const applyThemePreset = (presetName) => {
    const preset = themePresets[presetName]
    if (preset) {
        Object.assign(themeConfig, preset)
    }
}
