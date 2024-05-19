import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { FC } from "react";
import { Image } from "../../Types";

interface ImageGalleryProps {
    images: Image[];
    onOpenModal: (photo: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onOpenModal }) => {
    return (
        <ul className={css.list}>
        {images.map(image => (
            <li className={css.item} key={image.id}>
            <ImageCard key={image.id} image={image} onOpenModal={onOpenModal} />
            </li>
        ))}
        </ul>
    );
}

export default ImageGallery;