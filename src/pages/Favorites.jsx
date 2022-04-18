import { useEffect, useState } from "react";
import CardList from "../cmps/CardList";
import { weatherService } from "../services/weather.service";

const Favorites = () => {

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const arr = weatherService.getFavs();
        setFavs(arr);
    }, []);

    console.log(favs);
    return (
        <section className="favorite-container main-layout">
            <div className="favorite-heading">
                <h1>Favorites</h1>
                <p>Check you're liked locations down below</p>
            </div>
            {/* <p>Favs</p> */}
            {favs?.length && favs.map(fav => {
                return (
                    <div className="fav-location" key={fav.city.Key}>
                        <h1>{fav.city.LocalizedName}</h1>
                        <CardList items={fav.forecast} />
                    </div>
                );
            })
            }
        </section>
    );
};

export default Favorites;