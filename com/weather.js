import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { weatherCon } from '../com/weathercon';
import { Day } from './day';
import apsuat from '../assets/apsuat.png';
import gio from '../assets/gio.png';
import doam from '../assets/doam.png';
import tamnhin from '../assets/tamnhin.png';
var day = new Date().getDay();
var listday = { Day }['Day'];
var daily3 = listday[day + 2];
var daily4 = listday[day + 3];
var daily5 = listday[day + 4];
const Weather = ({
	temperature,
	weather,
	speed,
	visibility,
	humidity,
	pressure,
	backgr,
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
	json1,
}) => {
	
	return (
		<ScrollView>
			 <ImageBackground source={weatherCon[weather].backG} style={{width: '100%', height: '100%'}}>
				<Text style={{ fontSize: 15, textAlign: 'center', color: 'white', marginTop: 15 }}>
					{locationName} {locationName2}
				</Text>
				<View style={styles.headerContainer}>
					<Text style={styles.tempText}>{temperature}˚</Text>
					<Text style={styles.title}>{weatherCon[weather].title}</Text>
					<Image source={weatherCon[weather].icon}></Image>
					<Text style={styles.subtitle}>{}</Text>
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.titlemenu}>Detail</Text>
				</View>
				<View style={styles.bodyContainer1}>
					<View>
						<View style={styles.boxleft}>
							<View style={styles.cm1}>
								<Text style={styles.menu1}>Pressure:</Text>
								<Text style={styles.menu2}>{pressure}mb</Text>
							</View>
							<View>
								<Image source={apsuat} style={styles.image1} />
							</View>
						</View>

						<View style={styles.boxleft}>
						<View style={styles.cm2}>
								<Text style={styles.menu1}>Humidity:</Text>
								<Text style={styles.menu2}>{humidity}%</Text>
							</View>
							<View>
 								<Image source={doam} style={styles.image2} />
							</View>
						</View>
					</View>

					<View>
						<View style={styles.boxright}>
						<View style={styles.cm3}>
								<Text style={styles.menu1}>Wind speed:</Text>
								<Text style={styles.menu2}>{(speed * 3.6).toPrecision(3)}km/h</Text>
							</View>
							<View>
								<Image source={gio} style={styles.image3} />
							</View>
						</View>

						<View style={styles.boxright}>
						<View style={styles.cm4}>
								<Text style={styles.menu1}>Vision:</Text>
								<Text style={styles.menu2}>{(visibility / 1000).toPrecision(3)}km</Text>
							</View>
							<View>
								<Image source={tamnhin} style={styles.image4} />
							</View>
						</View>
					</View>
				</View>

				<View>
					<View style={styles.titleBottom}>
						<Text style={styles.titlemenu}>5-Day forecast</Text>
					</View>
					<View style={styles.menuBottom}>
						<Text style={styles.text}>Today-{we1}</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 15, color: 'white' }}>
								{((5 / 9) * (temp1min - 32)).toFixed()} / {((5 / 9) * (temp1max - 32)).toFixed()} ˚C
							</Text>
						</View>
					</View>
					<View style={styles.menuBottom}>
						<Text style={styles.text}>Tomorrow-{we2}</Text>
						<View style={{ flexDirection: 'row' }}>

							<Text style={{ fontSize: 15, color: 'white' }}>
								{((5 / 9) * (temp2min - 32)).toFixed()} / {((5 / 9) * (temp2max - 32)).toFixed()} ˚C
							</Text>
						</View>
					</View>
					<View style={styles.menuBottom}>
						<Text style={styles.text}>
							{daily3}-{we3}
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 15, color: 'white' }}>
								{((5 / 9) * (temp3min - 32)).toFixed()} / {((5 / 9) * (temp3max - 32)).toFixed()} ˚C
							</Text>
						</View>
					</View>
					<View style={styles.menuBottom}>
						<Text style={styles.text}>
							{daily4}-{we4}
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 15, color: 'white' }}>
								{((5 / 9) * (temp4min - 32)).toFixed()} / {((5 / 9) * (temp4max - 32)).toFixed()} ˚C
							</Text>
						</View>
					</View>
					<View style={styles.menuBottom}>
						<Text style={styles.text}>
							{daily5}-{we5}
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ fontSize: 15, color: 'white' }}>
								{((5 / 9) * (temp5min - 32)).toFixed()}/ {((5 / 9) * (temp5max - 32)).toFixed()} ˚C
							</Text>
						</View>
					</View>
				</View>
				</ImageBackground>
			</ScrollView>
	);
};

const styles = StyleSheet.create({
	weatherContainer: {
		flex: 1,
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 30,
		marginTop: 60,
		marginBottom: 170,
	},
	titlemenu: {
		color: 'white',
		paddingBottom: 10,
	},
	boxleft: {
		width: 180,
		height: 70,
		flex: 1,
		flexDirection: 'row',
	},
	boxright: {
		width: 180,
		height: 70,
	},
	tempText: {
		fontSize: 90,
		color: 'red',
	},
	bodyContainer: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	bodyContainer1: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		marginBottom:50
	},
	menuBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	titleBottom: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	menu1: {
		fontSize: 14,
		color: 'red',
	},
	menu2: {
		fontSize: 20,
		color: 'red',
	},
	title: {
		fontSize: 30,
		color: 'red',
	},
	subtitle: {
		fontSize: 20,
		color: 'red',
	},
	image1: {
		width: 50,
		height: 50,
		marginLeft:47,
		marginTop:10
	},
	cm1:{
		marginTop:10,
		marginLeft:5
	},
	image2: {
		width: 50,
		height: 50,
		marginLeft:80,
		marginTop:10
	},
	cm2:{
		marginTop:10,
		marginLeft:5
	},
	image3: {
		width: 50,
		height: 50,
		marginLeft:125,
		marginTop:-45
	},
	text:{
		color: 'white',
		paddingBottom: 10,
		textAlign: 'right'
	},
	cm3:{
		marginTop:10,
		marginLeft:5
	},
	image4: {
		width: 50,
		height: 50,
		marginLeft:125,
		marginTop:-45
	},
	cm4:{
		marginTop:10,
		marginLeft:5
	},

});
export default Weather;
