import React from 'react';

    const Weather = (props) => {
        return (
            <div className="infoWeath">
                { props.city &&
                <div>
                    <p>Местоположение: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp}&#8451; </p>
                    <p>Влажность: {props.humidity}% </p>
                    <p>Заход солнца: {props.sunset}</p>
                </div>
                }
               <p className="error">{ props.error }</p>
            </div>
        );
    }

export default Weather;