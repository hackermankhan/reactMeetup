import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/layouts/Meetups/MeetupList";

const FavoritesPage = () => {
    const favContext = useContext(FavoritesContext);
    if (favContext.totalFavorites === 0) {
        return (
            <section>
                <h1>My favorites</h1>
                <p>No favorites yet...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>My favorites</h1>
            <MeetupList meetups={favContext.favorites} />
        </section>
    )
}

export default FavoritesPage;