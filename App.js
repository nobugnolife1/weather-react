import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
var hours = new Date().getHours();
var KEY = '849338767c0e95025b5559533d26b7c4';
var KEY_AC = 'GS1cEw1R9GxOmAGRXCn137ZH6zAfO6We';
import Weather from './com/weather';
import { weatherCon } from './com/weathercon';


export default class App extends React.Component {
	state = {
		isLoading: true,
		temperature: 0,
		humidity: 0,
		visibility: 0,
		speed: 0,
		pressure: 0,
		weatherCon: null,
		backgr: null,
		locationName: null,
		locationName2: null,
		keylocation: 0,
		daily: null,
		temp1min: 0,
		temp2min: 0,
		temp3min: 0,
		temp4min: 0,
		temp5min: 0,
		temp1max: 0,
		temp2max: 0,
		temp3max: 0,
		temp4max: 0,
		temp5max: 0,
		we1:0,
		we2:0,
		we3:0,
		we4:0,
		we5:0,
		json1:null,
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			this.fetchWeather(position.coords.latitude, position.coords.longitude);
			this.fetchLocation(position.coords.latitude, position.coords.longitude);
		});
	}

	fetchWeather(lat, lon) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`)
			.then(res => res.json())
			.then(json => {
				// console.log(json);
				if (hours >= 4 && hours <= 17) {
					backgr = 'Day';
				} else {
					backgr = 'Night';
				}
				this.setState({
					speed: json.wind.speed,
					visibility: json.visibility,
					humidity: json.main.humidity,
					pressure: json.main.pressure,
					temperature: json.main.temp,
					weatherCon: json.weather[0].main,
					backgr: backgr,
				});
			});
	}
	fetchLocation(lat, lon) {
		fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${KEY_AC}&q=${lat}%2C${lon}&language=vi-vn`
		)
			.then(res => res.json())
			.then(json => {
				this.fetch5Day(json.Key);

				this.setState({
					locationName: json.LocalizedName,
					locationName2: json.ParentCity.LocalizedName,
				});
			});
	}
	fetch5Day(locationkey) {
		fetch(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationkey}?apikey=${KEY_AC}&language=vi-vn`
		)
			.then(res => res.json())
			.then(json => {
				console.log(json.DailyForecasts);
				
				if (hours >= 4 && hours <= 17) {
					this.setState({
						we1: json.DailyForecasts[0].Day.IconPhrase,
						we2: json.DailyForecasts[1].Day.IconPhrase,
						we3: json.DailyForecasts[2].Day.IconPhrase,
						we4: json.DailyForecasts[3].Day.IconPhrase,
						we5: json.DailyForecasts[4].Day.IconPhrase,
					});
				} else {
					this.setState({
						we1: json.DailyForecasts[0].Night.IconPhrase,
						we2: json.DailyForecasts[1].Night.IconPhrase,
						we3: json.DailyForecasts[2].Night.IconPhrase,
						we4: json.DailyForecasts[3].Night.IconPhrase,
						we5: json.DailyForecasts[4].Night.IconPhrase,
					});				}
				// console.log(json.DailyForecasts[0].Day.Icon);

				this.setState({
					json1:json,
					temp1min: json.DailyForecasts[0].Temperature.Minimum.Value,
					temp2min: json.DailyForecasts[1].Temperature.Minimum.Value,
					temp3min: json.DailyForecasts[2].Temperature.Minimum.Value,
					temp4min: json.DailyForecasts[3].Temperature.Minimum.Value,
					temp5min: json.DailyForecasts[4].Temperature.Minimum.Value,
					temp1max: json.DailyForecasts[0].Temperature.Maximum.Value,
					temp2max: json.DailyForecasts[1].Temperature.Maximum.Value,
					temp3max: json.DailyForecasts[2].Temperature.Maximum.Value,
					temp4max: json.DailyForecasts[3].Temperature.Maximum.Value,
					temp5max: json.DailyForecasts[4].Temperature.Maximum.Value,
					isLoading: false,
					
				});
			});
	}

	render() {
		const {
			isLoading,
			weatherCon,
			temperature,
			speed,
			visibility,
			humidity,
			pressure,
			backgr,
			daily,
			locationName,
			locationName2,
			temp1min,
			temp2min,
			temp3min,
			temp4min,
			temp5min,
			temp1max,
			temp2max,
			temp3max,
			temp4max,
			temp5max,
			we1,
			we2,
			we3,
			we4,
			we5,
			json1
		} = this.state;
		return (
			<View style={styles.container}>
				{isLoading ? (
					<View style={styles.loadingContainer}>
						<Image style={styles.okim} source ={require('./assets/ok1.png')}/>
						<Text style={styles.loadingText}>Download... Your Weather :)</Text>
					</View>
				) : (
					<Weather
						temperature={temperature}
						weather={weatherCon}
						speed={speed}
						visibility={visibility}
						humidity={humidity}
						backgr={backgr}
						pressure={pressure}
						daily={daily}
						locationName={locationName}
						locationName2={locationName2}
						temp1min={temp1min}
						temp2min={temp2min}
						temp3min={temp3min}
						temp4min={temp4min}
						temp5min={temp5min}
						temp1max={temp1max}
						temp2max={temp2max}
						temp3max={temp3max}
						temp4max={temp4max}
						temp5max={temp5max}
						we1={we1}
						we2={we2}
						we3={we3}
						we4={we4}
						we5={we5}
						json1={json1}

					/>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#8A2BE2',
	},

	loadingText: {
		fontSize: 30,
		color:'white'
	},
	okim:{
		marginLeft:60
	}
});
