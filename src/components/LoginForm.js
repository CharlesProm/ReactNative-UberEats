import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginForm = ({ navigation, onChange, onSubmit, form }) => {

	const SignupButton = () => {
		return (
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtnLogin}
					onPress={() => navigation.navigate('Registo de cliente')}
				>
					<Text style={styles.btnText}>Signup client</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => navigation.navigate('Registro de conductor')}
				>
					<Text style={styles.btnText}>Signup drive</Text>
				</TouchableOpacity>
			</View>
		)
	}

	const LoginButton = () => {
		return (
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtnLogin}
					onPress={onSubmit}
				>
					<Text style={styles.btnText}>Login</Text>
				</TouchableOpacity>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Inicio de sesión</Text>
			<TextInput
				style={styles.input}
				placeholder="Username"
				name="username"
				value={form.username}
				onChangeText={(text) => onChange('username', text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				name="password"
				value={form.password}
				onChangeText={(text) => onChange('password', text)}
			/>
			{
				form.username == "" && form.password == ""
					? <SignupButton />
					: <LoginButton />
			}

		</View>
	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1e90ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		color: "#fff"
	},
	input: {
		width: 400,
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		width: 380,
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	userBtnLogin: {
		backgroundColor: "#ffd700",
		padding: 15,
		width: "43.5%",
		marginRight: 10,
	},
	userBtn: {
		backgroundColor: "#ffd700",
		padding: 15,
		width: "43.5%",
	},
	btnText: {
		fontSize: 18,
		textAlign: "center"
	}

});

export default LoginForm