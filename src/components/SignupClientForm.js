import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const SignupClientForm = ({ onChangeText, onPress, form }) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

	const showDatePicker = () => {
		setDatePickerVisibility(true)
	}
	const hideDatePicker = () => {
		setDatePickerVisibility(false)
	}
	const handleConfirm = (date) => {
		let cadena = `${date}`
		let d = cadena.split(" ");
		let monthValue
		let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		for (let i = 0; i < month.length; i++) {
			if (month[i] == d[1]) {
				monthValue = i + 1
			}
		}
		form.birthdate = `${d[2]}/${monthValue}/${d[3]}`
		hideDatePicker();
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.inputsingle}
				placeholder="Username"
				name="username"
				value={form.username}
				onChangeText={(text) => onChangeText('username', text)}
			/>
			<View style={styles.btnContainer}>
				<TextInput
					style={styles.input}
					placeholder="Primer nombre"
					name="first_name"
					onChangeText={(text) => onChangeText('first_name', text)}
					value={form.first_name}
				/>
				<TextInput
					style={styles.inputleth}
					placeholder="Segundo nombre"
					name="second_name"
					onChangeText={(text) => onChangeText('second_name', text)}
					value={form.second_name}
				/>
			</View>
			<View style={styles.btnContainer}>
				<TextInput
					style={styles.input}
					placeholder="Primer apellido"
					name="first_lastname"
					onChangeText={(text) => onChangeText('first_lastname', text)}
					value={form.first_lastname}
				/>
				<TextInput
					style={styles.inputleth}
					placeholder="Segundo apellido"
					name="second_lastname"
					onChangeText={(text) => onChangeText('second_lastname', text)}
					value={form.second_lastname}
				/>
			</View>
			<View style={styles.btnContainer}>
				<TouchableOpacity
					title="Show date picker"
					style={styles.datePicker}
					onPress={showDatePicker}>
					<Text>Data Picker</Text>

				</TouchableOpacity>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="date"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}
				/>
				<TextInput
					style={styles.input}
					placeholder="Fecha de nacimiento"
					name="birthdate"
					onChangeText={(text) => onChangeText('birthdate', text)}
					value={form.birthdate}
				/>
			</View>

			<TextInput
				style={styles.inputsingle}
				placeholder="Email"
				name="email" onChangeText
				onChangeText={(text) => onChangeText('email', text)}
				value={form.email}
			/>

			<View style={styles.btnContainer}>
				<TextInput
					style={styles.input}
					placeholder="Contraseña"
					secureTextEntry
					name="password"
					onChangeText={(text) => onChangeText('password', text)}
					value={form.password}
				/>
				<TextInput
					style={styles.inputleth}
					placeholder="Confirmación de contraseña"
					secureTextEntry
					name="passwordConfirm"
					onChangeText={(text) => onChangeText('passwordConfirm', text)}
					value={form.passwordConfirm}
				/>
			</View>
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={onPress}
				>
					<Text style={styles.btnText}>Registrar</Text>
				</TouchableOpacity>
			</View>

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
	input: {
		width: 185,
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		marginRight: 10,
	},
	inputleth: {
		width: 185,
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
	},
	inputsingle: {
		width: 380,
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	userBtn: {
		backgroundColor: "#ffd700",
		padding: 15,
		width: "90%",
	},
	btnText: {
		fontSize: 18,
		textAlign: "center"
	},
	datePicker: {
		width: 185,
		backgroundColor: "#ffd700",
		padding: 15,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
	}

});

export default SignupClientForm