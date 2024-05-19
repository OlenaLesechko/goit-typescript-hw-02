import css from './LoadMoreBtn.module.css';
import { FC } from "react";

interface onClickProps {
    onClick: () => void;
}
const LoadMoreBtn:  FC<onClickProps> = ({ onClick }) => {
    return (
        <button className={css.btn} onClick={onClick}>
        Load More
        </button>
    );
}

export default LoadMoreBtn;
