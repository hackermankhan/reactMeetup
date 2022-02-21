import { createContext, useState } from "react";

//take initial value as anything, we chose an object
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

export const FavoritesContextProvider = ({ children }) => {
    const [allFavorites, setFavorites] = useState([])

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
        allFavorites,
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