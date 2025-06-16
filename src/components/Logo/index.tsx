import { Timer } from 'lucide-react';
import styles from './styles.module.css';


export function Logo() {

    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href='#' >
                <Timer />
                <h1>Chronos</h1>
            </a>
        </div>
    );

}