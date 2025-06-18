import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableTheme = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableTheme>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home' >
                <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ver histórico' title='Ver histórico' >
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ir para Configurações' title='Ir para Configurações'>
                <SettingsIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Mudar tema'
                title='Mudar tema'
                onClick={handleThemeChange}
            >
                <SunIcon />
            </a>
        </nav>
    );

}