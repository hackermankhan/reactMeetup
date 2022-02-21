import { createContext, useState, useEffect } from "react";

//local storage functions
function setLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // catch possible errors
    }
}

function getLocalStorage(key, initialValue) {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        // if error, return initial value
        return initialValue;
    }
}

//take initial value as anything, we chose an object
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

export const FavoritesContextProvider = ({ children }) => {
    const [allFavorites, setFavorites] = useState(() => getLocalStorage("allFavorites", []))

    //update local storage
    useEffect(() => {
        setLocalStorage("allFavorites", allFavorites);
    }, [allFavorites]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setFavorites((previousFavorites) => {
            return previousFavorites.concat(favoriteMeetup)
        })
    }

    const removeFavoriteHandler = (meetupID) => {
        setFavorites((previousFavorites) => {
            return previousFavorites.filter(e => meetupID !== e.id)
        })
    }

    const isItemFavoriteHandler = (meetupID) => {
        return allFavorites.some(e => meetupID === e.id)
    }

    const context = {
        favorites: allFavorites,
        totalFavorites: allFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isItemFavorite: isItemFavoriteHandler,
    }

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;