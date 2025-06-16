import { Timer } from 'lucide-react';
import styles from './Heading.module.css';


export function Heading() {

    return (
        <div className={styles.heading}>
            <Timer />
            <h1>Chronos</h1>
        </div>
    );

}