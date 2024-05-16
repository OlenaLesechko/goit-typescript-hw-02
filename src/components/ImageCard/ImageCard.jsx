import css from './ImageCard.module.css';

export default function ImageCard({ image, onOpenModal }) {
    return (
        <ul>
        <li>
            {/* <div onClick={() => onOpenModal(image)}> */}
            <img
            className={css.img}
            src={image.urls.small}
            alt={image.urls.description}
            onClick={() => onOpenModal(image)}
            />
            {/* </div> */}
        </li>
        </ul>
    );
}