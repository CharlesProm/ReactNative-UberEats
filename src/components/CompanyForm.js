import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const CompanyForm = ({ onChange, onSubmit, deleteCompanies, form }) => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Nombre de la empresa"
				name="nombre"
				value={form.nombre}
				onChangeText={(text) => onChange('nombre', text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Direccion"
				name="direcion"
				value={form.direccion}
				onChangeText={(text) => onChange('direccion', text)}
			/>
			{form.id_empresa && <View style={styles.btnContainer}>

				<TouchableOpacity
					style={styles.btn}
					onPress={deleteCompanies}
				>
					<Text style={styles.btnText}>Eliminar Emprea</Text>
				</TouchableOpacity>
			</View>}
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.btn}
					onPress={onSubmit}
				>
					<Text style={styles.btnText}>Guardar</Text>
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
		width: 400,
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		width: 380,
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginTop: 20
	},
	btn: {
		backgroundColor: "#ffd700",
		padding: 15,
		width: "43.5%",
	},
	btnText: {
		fontSize: 18,
		textAlign: "center"
	}

});

export default CompanyForm