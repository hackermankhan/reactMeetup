import { useContext } from 'react';
import FavoritesContext from '../../../store/favorites-context';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

const MeetupItem = ({ id, img, title, address, description }) => {
    const favContext = useContext(FavoritesContext);
    const itemIsFav = favContext.isItemFavorite(id);

    const toggleFavorites = () => {
        if (itemIsFav) {
            favContext.removeFavorite(id);
        } else {
            const meetupToAdd = {
                id,
                image: img,
                title,
                address,
                description
            }
            favContext.addFavorite(meetupToAdd);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={img} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavorites}>{itemIsFav ? 'Remove from favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;