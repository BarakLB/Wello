import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { debounce } from 'lodash';
import { weatherService } from "../services/weather.service";
const Search = ({ updateCurrCity }) => {


    const [state, setState] = useState({ txt: '', cities: [], display: false });


    
    
    const handleChange = ({ target }) => {
        const { value, name } = target;
        setState({ ...state, [name]: value });
        citiesToShow(value);
    };

    const citiesToShow = async (txt) => {
        const cities = await weatherService.getCities(txt);
        setState({ ...state, cities });
    };
    // console.log(state);
    const debounceTxt = debounce(handleChange, 1500);
    return (
        <section className="search-container">

            <div className="input-wrapper">
                <input type="text" name="txt"
                    autoComplete="off"
                    placeholder="Search..."
                    // onBlur={() => setState({ ...state, display: false })}
                    onClick={() => setState({ ...state, display: true })}
                    onChange={debounceTxt} />
                <button><GoSearch /></button>
            </div>

            {state.display && (
                <div className="auto-complete">
                    {state.cities && state.cities.map(city => {
                        return <p onClick={() => updateCurrCity(city)} key={city.LocalizedName}>{city.LocalizedName}</p>;
                    })}
                </div>
            )}

        </section>
    );
};


export default Search;