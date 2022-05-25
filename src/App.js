import React from 'react';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const api = "7ba4907baddbfcfd972d1f60598c4c78";

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city){
      
      const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=ru`);
      const data = await apiUrl.json();
      console.log(data);


      var sunset = data.sys.sunset * 1000;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.toLocaleTimeString().slice(0,-3);;
      var tempRound = Math.round(data.main.temp);
            
      
      this.setState({
        temp: tempRound,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState ({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        sunset: undefined,
        error: "Ошибочка!",
      });
    }
  }


  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>  
      </div>
    )};
}

export default App;