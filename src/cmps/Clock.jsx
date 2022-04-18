import { useEffect, useState } from "react";
import { utilService } from "../services/util.service";

const Clock = () => {

    const [state, setState] = useState();


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setState(utilService.handleClock(date));
        });
    }, []);

    return (
        <div className="clock-container">
            <h3>
                {state}
            </h3>
        </div>
    );
};

export default Clock;