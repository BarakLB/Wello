import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { utilService } from '../services/util.service';
import { useEffect, useState } from 'react';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: false,
    plugins: {
        // legend: {
        //     position: 'top' as const,
        // },
        title: {
            display: true,
            text: 'Temperatures during the week',
        },
    },
};



const WeatherChart = ({ forecast }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(forecast);
        const labels = forecast.DailyForecasts.map(x => utilService.handleTimestamp(x.Date));
        console.log(labels);
        const maxVal = forecast.DailyForecasts.map(x => x.Temperature.Maximum.Value);
        const minVal = forecast.DailyForecasts.map(x => x.Temperature.Minimum.Value);
        // console.log(tempVal);

        setData({
            labels,
            datasets: [
                {
                    label: 'Maximum',
                    data: maxVal,
                    borderColor: '#6151C3',
                    backgroundColor: '#6a34C388',
                },
                {
                    label: 'Minimum',
                    data: minVal,
                    borderColor: '#B64DFF',
                    backgroundColor: '#6a34C388',

                }
            ]
        });
    }, []);

    return (
        <div className="chart-wrapper">
            {data && <Line options={options} data={data} />}
            {/* chart */}
        </div>
    );
};

export default WeatherChart;