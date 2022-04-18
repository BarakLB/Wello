import React from "react";
import Search from "../cmps/Search";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { weatherService } from "../services/weather.service";
import CardList from "../cmps/CardList";
import Clock from "../cmps/Clock";
import WeatherChart from "../cmps/WeatherChart";


export class App extends React.Component {
    state = {
        currCity: null,
        // isFavorite: false,
    };


    async componentDidMount() {
        const loc = await weatherService.getFirst();
        this.setState({ ...this.state, currCity: loc, });
    }

    updateCurrCity = async (city) => {
        console.log('eee', city);
        // this.setState({ currCity: city });
        const forecast = await weatherService.getWeather(city);
        this.setState({ currCity: forecast });
    };

    addToFavorite = async () => {
        const { currCity } = this.state;

        // this.setState({ isFavorite: !isFavorite });
        const city = await weatherService.addToFave(currCity);
        console.log(city);
        this.setState({ ...this.state, currCity: city });
    };

    getColor = () => {
        if (this.state.currCity) {

            if (this.state.currCity.forecast.DailyForecasts[0].Temperature.Maximum.Value <= 60) return 'blue';
            else return 'red';
        }
    };
    render() {
        const { currCity } = this.state;
        return (
            // <section className={`main-layout app-container flex col align-center  ${this.getColor()}`}>
            <section className={`main-layout app-container flex col align-center`}>

                <Clock />

                <Search updateCurrCity={this.updateCurrCity} />
                {currCity &&
                    <div className="heart" onClick={() => this.addToFavorite()}>
                        {currCity.city.isFavorite ? <BsSuitHeartFill /> : <BsSuitHeart />}
                    </div>}
                <button className="celcsius-btn">View in °C</button>

                {currCity &&
                    <>
                        <div className="weather-container">
                            <h1>Showing weather in: {currCity.city.LocalizedName}</h1>
                            <h3>{currCity.forecast.Headline.Text}</h3>
                            <CardList items={currCity.forecast} />
                            {/* <WeatherChart forecast={currCity.forecast} /> */}
                        </div>
                    </>
                }



            </section>
        );
    }
}