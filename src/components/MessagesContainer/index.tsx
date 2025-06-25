import type React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProp = {
  children: React.ReactNode
};

export function MessagesContainer({ children }: MessagesContainerProp) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>
  );
}