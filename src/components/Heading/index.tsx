import React from 'react';
import styles from './styles.module.css';


type HeadingProps = {
    children: React.ReactNode;
}

/**
 * Renders a heading element (`<h1>`) with the provided children.
 *
 * @param children - The content to be displayed inside the heading.
 * @returns A React element representing the heading.
 */
export function Heading({ children }: HeadingProps) {

    return <div className={styles.heading}>{children}</div>;

}