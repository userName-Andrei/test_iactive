import React, {FC, useState, useEffect} from 'react';
import {FaRegStar, FaStar} from 'react-icons/fa';

import styles from './Favorite.module.css';

interface FavoriteProps {
    id: number | string
}

const Favorite: FC<FavoriteProps> = ({id}) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const favorites = window.localStorage.getItem('favorites') ? 
                      JSON.parse(window.localStorage.getItem('favorites')!) : 
                      [];

    const setFavorite = (id: number) => {
        const localStorage = window.localStorage;
        const localFavorites: number[] = localStorage.getItem("favorites")
            ? JSON.parse(localStorage.getItem("favorites")!)
            : null;

        if (localFavorites) {
            localStorage.setItem(
                "favorites",
                JSON.stringify([...localFavorites, id])
            );

            return
        }

        localStorage.setItem("favorites", JSON.stringify([id]));
    }

    const deleteFavorite = (id: number) => {
        const localStorage = window.localStorage;
        const localFavorites: number[] = localStorage.getItem("favorites")
            ? JSON.parse(localStorage.getItem("favorites")!)
            : null;

        if (!localFavorites) return;

        localStorage.setItem(
            "favorites",
            JSON.stringify(
                localFavorites.filter((item) => item !== id)
            )
        );
    }

    const handleClick = () => {
        if (isFavorite) {
            deleteFavorite(+id)
            setIsFavorite(false)
        } else {
            setFavorite(+id)
            setIsFavorite(true)
        }
    }

    useEffect(() => {
        if (favorites.includes(+id)) {
            setIsFavorite(true)
        }
    }, [])

    return (
        <button 
            className={styles.favorite}
            onClick={() => handleClick()}
        >
            {isFavorite ? <FaStar /> : <FaRegStar />}
        </button>
    );
};

export default Favorite;