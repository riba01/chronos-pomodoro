import type { ToastContentProps } from 'react-toastify';
import styles from './styles.module.css';
import { DefaultButton } from '../DefaultButton';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            aria-label='Confirmar ação de fechar'
            title='Confirmar ação de fechar'
            color='green'
          >
            <ThumbsUpIcon />
          </DefaultButton>
          <DefaultButton
            onClick={() => closeToast(false)}
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
            color='red'
          >
            <ThumbsDownIcon />
          </DefaultButton>
        </div>
      </div>
    </>
  );

}