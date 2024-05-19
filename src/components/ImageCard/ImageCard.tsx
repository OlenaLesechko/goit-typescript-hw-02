import css from './ImageCard.module.css';
import { FC } from "react";
import { Image } from "../../Types";
interface ImageCardProps {
    image: Image;
    onOpenModal: (photo: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onOpenModal }) => {
    const { urls, description } = image;
    return (
        <ul>
        <li>
            {/* <div onClick={() => onOpenModal(image)}> */}
            <img
            className={css.img}
            src={urls.small}
            alt={description}
            onClick={() => onOpenModal(image)}
            />
            {/* </div> */}
        </li>
        </ul>
    );
}
export default ImageCard;