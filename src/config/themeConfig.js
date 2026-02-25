// Theme Configuration - Burgundy Red Wine palette
// 1 = #F8F1D6 (minor/cream), 2 = #DBBE9B (tan), 3 = #7B1830 (wine), 4 = #4D0011 (main)
export const themeConfig = {
    // Background Colors
    backgrounds: {
        primary: 'bg-burgundy-dark',     // #4D0011 - main
        secondary: 'bg-burgundy-wine',   // #7B1830 - secondary
        accent: 'bg-burgundy-wine',     // #7B1830
        light: 'bg-white/50',
        theme: 'bg-burgundy-cream',      // #F8F1D6 - minor/cream
        garden: 'bg-burgundy-cream',     // light sections
        crumpledPaper: 'bg-[url("/assets/images/crumpled-paper.png")] bg-cover bg-center bg-no-repeat',
    },

    // Text Colors
    text: {
        primary: 'text-burgundy-dark',     // #4D0011 - main
        secondary: 'text-burgundy-tan',    // #DBBE9B - support
        accent: 'text-burgundy-wine',      // #7B1830
        muted: 'text-burgundy-tan/80',
        dark: 'text-burgundy-dark',        // #4D0011
        theme: 'text-burgundy-wine',       // #7B1830
        pause: 'text-[#F8F1D6]',
        custom: 'text-burgundy-dark',
        light: '#DBBE9B',
        lightBlack: '#7B1830',
        cream: '#F8F1D6',
        tan: '#DBBE9B',
        wine: '#7B1830',
        burgundyDark: '#4D0011',
    },

    // Border Colors
    borders: {
        primary: 'border-burgundy-wine',
        secondary: 'border-burgundy-tan',
        accent: 'border-burgundy-wine',
        theme: 'border-burgundy-tan',
        garden: 'border-burgundy-tan',
    },

    // Button Colors
    buttons: {
        primary: 'bg-burgundy-wine hover:bg-burgundy-dark',   // #7B1830 → #4D0011
        secondary: 'border border-burgundy-tan hover:border-burgundy-wine',
        text: 'text-burgundy-cream hover:text-white',
        theme: 'bg-burgundy-wine hover:bg-burgundy-wine/90',
        garden: 'bg-burgundy-tan hover:bg-burgundy-wine',
    },

    // Hover Effects
    hover: {
        primary: 'hover:bg-burgundy-dark',
        secondary: 'hover:border-burgundy-wine hover:text-burgundy-cream',
        theme: 'hover:bg-burgundy-wine/90',
        garden: 'hover:bg-burgundy-wine',
    },

    // Container Configuration
    container: {
        maxWidth: 'max-w-[1300px]',
        padding: 'px-4 sm:px-6 lg:px-8',
        center: 'mx-auto',
    },

    // Calendar Configuration
    calendar: {
        weddingDate: '2026-05-08',
        highlightColor: 'bg-burgundy-wine',
        heartColor: 'text-burgundy-wine',
        textColor: 'text-burgundy-dark',
        headerColor: 'text-burgundy-wine',
        dayNamesColor: 'text-burgundy-tan',
        background: 'bg-burgundy-cream',
    },

    // Paragraph Configuration
    paragraph: {
        background: 'bg-burgundy-cream',
        garden: 'bg-burgundy-cream',
    },

    // Custom CSS Variables
    cssVariables: {
        '--primary-bg': '#4D0011',
        '--secondary-bg': '#7B1830',
        '--accent-bg': '#7B1830',
        '--accent-hover': '#4D0011',
        '--primary-text': '#4D0011',
        '--secondary-text': '#DBBE9B',
        '--accent-text': '#7B1830',
        '--muted-text': '#DBBE9B',
        '--border-color': '#7B1830',
        '--custom-theme': '#7B1830',
        '--cream': '#F8F1D6',
        '--tan': '#DBBE9B',
        '--wine': '#7B1830',
        '--burgundy-dark': '#4D0011',
        '--garden-bg': '#F8F1D6',
    }
}

// Quick color presets for different themes
export const themePresets = {
    darkElegant: {
        backgrounds: {
            primary: 'bg-burgundy-dark',
            secondary: 'bg-burgundy-wine',
            accent: 'bg-burgundy-wine',
        },
        text: {
            primary: 'text-burgundy-cream',
            secondary: 'text-burgundy-tan',
            accent: 'text-burgundy-wine',
        }
    },

    lightRomantic: {
        backgrounds: {
            primary: 'bg-burgundy-cream',
            secondary: 'bg-white',
            accent: 'bg-burgundy-wine',
        },
        text: {
            primary: 'text-burgundy-dark',
            secondary: 'text-burgundy-wine',
            accent: 'text-burgundy-wine',
        }
    },

    warmAutumn: {
        backgrounds: {
            primary: 'bg-burgundy-cream',
            secondary: 'bg-burgundy-tan/30',
            accent: 'bg-burgundy-wine',
        },
        text: {
            primary: 'text-burgundy-dark',
            secondary: 'text-burgundy-wine',
            accent: 'text-burgundy-wine',
        }
    },

    gardenWedding: {
        backgrounds: {
            primary: 'bg-burgundy-cream',
            secondary: 'bg-white',
            accent: 'bg-burgundy-wine',
            theme: 'bg-burgundy-cream',
        },
        text: {
            primary: 'text-burgundy-dark',
            secondary: 'text-burgundy-wine',
            accent: 'text-burgundy-wine',
            garden: 'text-burgundy-tan',
        }
    }
}

// Helper function to get theme colors
export const getThemeColor = (type, variant = 'primary') => {
    return themeConfig[type]?.[variant] || themeConfig.text.primary
}

// Helper function to apply theme preset
export const applyThemePreset = (presetName) => {
    const preset = themePresets[presetName]
    if (preset) {
        Object.assign(themeConfig, preset)
    }
}
