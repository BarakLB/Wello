import Card from "./Card";
import WeatherChart from "../cmps/WeatherChart";

const CardList = ({ items }) => {
    if (!items) return <h1>Loading</h1>;
    return (
        <section className="cards-list">
            {items.DailyForecasts.map((item, idx) => <Card key={idx} item={item} idx={idx} />)}
            <WeatherChart forecast={items} />
        </section>
    );
};

export default CardList;