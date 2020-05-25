import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function GetStarted({ navigation }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('./my-icon.png')} />

			<Button
				title="Get Started"
				color="#30ba67"
				accessibilityLabel="Learn more about this purple button"
				onPress={() => navigation.navigate('AltCampus')}
			/>
			<Text style={styles.h2}>The Alternative to College That You Wish Existed.</Text>
		</View>
	);
}
function AltCampusScreen({ navigation }) {
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.container}>
				<Image style={styles.image_2} source={require('./logo_full.png')} />
				<Text style={styles.h3}>The Alternative to College That You Wish Existed</Text>
				<Text style={styles.h4}>
					A 6-month program that helps you become a software developer. No upfront payment.
				</Text>

				<Button title="Learn more" onPress={() => navigation.navigate('Program')} style={styles.btn_1} />

				<Image style={styles.image_3} source={require('./computer.png')} />
				<Text style={styles.h3}>Learn Quality Software Development</Text>
				<Text style={styles.h4_2}>
					Immersive bootcamp, rigorous curriculum, and the right environment to learn.
				</Text>

				<Image style={styles.image_3} source={require('./group.png')} />
				<Text style={styles.h3}>Mentorship</Text>
				<Text style={styles.h4_2}>
				In-house mentors to address your problems and accelerate your learning.
				</Text>

				<Image style={styles.image_3} source={require('./rupee.png')} />
				<Text style={styles.h3}>Pay Nothing Until You Earn</Text>
				<Text style={styles.h4_2}>
				We get paid only when we make sure that you get a job.
				</Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

			</View>

			<View style={styles.container_2}>
				<Image style={styles.image_2} source={require('./logo_full.png')} />
					<Text></Text>
			</View>
		</ScrollView>
	);
}
function AltProgram({ navigation }) {
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.container_2}>
				<Image style={styles.image_2} source={require('./logo_full.png')} />
				<Text style={styles.h3_2}>Full Stack Web Development</Text>
				<Text style={styles.h4_3}>
				Immersive.   Rigorous.   Learn by Doing.   Real World.   Industry Standard.   Peer Based.

				</Text>
				<View style={styles.container_2}>

				</View>
				<Button title="Apply Now" onPress={() => navigation.navigate('Program')} />
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'white',
		alignItems: 'center',
		width: '100%',
	},
	container_2: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#20345D',
		alignItems: 'center',
		width: '100%',
	},
	h1: {
		color: '#30ba67',
		fontSize: 40,
		marginTop: 300,
	},
	h2: {
		color: 'black',
		fontSize: 10,
		marginTop: 8,
	},
	image: {
		marginTop: 85,
		height: 230,
		width: 230,
	},
	image_1: {
		height: 80,
		width: 80,
	},
	image_2: {
		height: 80,
		width: 230,
		marginTop: 10,
	},
	image_3: {
		height: 45,
		width: 50,
		marginTop: 100,
		marginBottom: -30,
	},
	scroll: {
		backgroundColor: 'white',
	},
	h3: {
		marginTop: 39,
		fontSize: 25,
		textAlign: 'center',
		marginRight: 19,
		marginLeft: 19,
	},
	h3_2: {
		marginTop: 39,
		fontSize: 25,
		textAlign: 'center',
		marginRight: 19,
		marginLeft: 19,
		color: 'white'
	},
	h4: {
		marginTop: 39,
		fontSize: 15,
		textAlign: 'center',
		marginRight: 5,
		marginLeft: 5,
		marginBottom: 10,
	},
	h4_2: {
		marginTop: 9,
		fontSize: 15,
		textAlign: 'center',
		marginRight: 5,
		marginLeft: 5,
		marginBottom: 10,
	},
	h4_3: {
		marginTop: 9,
		fontSize: 15,
		textAlign: 'center',
		marginRight: 5,
		marginLeft: 5,
		marginBottom: 50,
		color: "white"
	},
});

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={GetStarted} />
				<Stack.Screen name="AltCampus" component={AltCampusScreen} />
				<Stack.Screen name="Program" component={AltProgram} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
