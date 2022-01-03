import { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

interface ModalOverlay {
  children: React.ReactNode;
}

interface BackdropProps {
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const BackDrop = ({ onClose }: BackdropProps) => {
    return <div className={styles.backdrop} onClick={onClose}></div>;
  };
  const ModalOverlay = ({ children }: ModalOverlay) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlays") as HTMLElement;
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay children={children} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
