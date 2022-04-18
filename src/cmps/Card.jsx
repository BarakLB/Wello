import { utilService } from "../services/util.service";

const Card = ({ item, idx }) => {


    const getColor = () => {
        if (item.Temperature.Maximum.Value <= 60) return 'blue';
        else return 'red';
    };

    return (
        // <section className={`card card${idx + 1} ${getColor()}`} >
        <section className={`card card${idx + 1} `} >
            <h1 className="card-date">{utilService.handleTimestamp(item.Date)}</h1>
            <img className="card-img" src={require(`../assets/img/${item.Day.Icon}.png`)} />
            <p className="card-temp">{item.Temperature.Maximum.Value}° {item.Temperature.Maximum.Unit}</p>
            <p className="card-txt">{item.Day.IconPhrase}</p>

            {/* <div>
                <p>Night: <img src={require(`../assets/img/${item.Night.Icon}.png`)} /></p>
            </div> */}
            {/* <a className="clean-link" href={item.Link} target="_blank">Read More</a> */}
        </section>
    );
};

export default Card;