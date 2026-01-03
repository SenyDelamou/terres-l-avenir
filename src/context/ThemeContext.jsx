import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
    isSystem: true
});

export const ThemeProvider = ({ children }) => {
    // Initial fetch from localStorage or default to system
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    const [isSystem, setIsSystem] = useState(!localStorage.getItem('theme'));

    // useLayoutEffect to prevent flash before first paint
    useLayoutEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);

        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            if (isSystem) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [isSystem]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIsSystem(false);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isSystem }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
