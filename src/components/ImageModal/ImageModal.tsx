import Modal from "react-modal";
import { FC } from "react";
import { Image } from "../../Types";
import css from './ImageModal.module.css';


Modal.setAppElement('#root');
interface ImageModalProps {
    image: Image;
    onOpenModal: boolean;
    onCloseModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, onOpenModal, onCloseModal }) => {
    const { urls, description, likes, raw } = image;

    return (
    <Modal
        className={css.content}
        overlayClassName={css.overlay}
        isOpen={onOpenModal}
        onRequestClose={onCloseModal}
        >
        <>
            <img className={css.img} src={urls.regular} alt={description} />
            <div className={css.info}>
            <p>Likes: {likes}</p>
            <a
                className={css.link}
                href={raw}
                download={`${description}.jpg`}
                target="_blank"
                rel="noopener noreferrer"
            >
                ready to download
            </a>
            </div>
        </>
        </Modal>
    );
}
export default ImageModal;