import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';
import { registerCompany } from '../api/Server';
import { Alert } from "react-native";

const CompanyForm = ({ show, formStyles, id, navigation }) => {

    const { generalContainer, hide, title, input, btn, subtitle, selectPicture, doubleInputContainer, doubleInput, } = formStyles

    const [image, setImage] = useState('')
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        description: "",
        lat: "",
        lon: "",
        id: id,
    })
    const handleChange = (name, value) => setFormData({ ...formData, [name]: value })
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
        }
    };

    const [marker, setMarker] = useState({
        latitude: 0,
        longitude: 0,
        title: 'xd',
        description: 'xd2',
    })
    const [mapLoad, setMapLoad] = useState(false)
    const pressMap = async (e) => {
        const lat = e.nativeEvent.coordinate.latitude
        const lon = e.nativeEvent.coordinate.longitude
        setMarker({ ...marker, ['latitude']: lat, ['longitude']: lon })
        setFormData({ ...formData, ["lat"]: lat, ["lon"]: lon })
        // "latitude": 10.396355828705968,
        // "longitude": -71.44520491361618,
    }

    const submit = () => {
        if (formData.password == formData.passwordConfirm) {
            const newFormData = new FormData()
            newFormData.append('image', { uri: image, name: `${id}_company.jpg`, type: 'image/jpeg' })
            for (const key in formData) {
                newFormData.append(`${key}`, formData[key])
            }
            registerCompany(newFormData,navigation)
        } else {
            Alert.alert('Las contraseñas no coinciden')
        }
    }



    return (
        <View style={{ paddingTop: 10, backgroundColor: "#ECDBBA" }}>
            <ScrollView style={show ? [generalContainer, { paddingTop: 0 }] : hide}>
                <View style={{ marginTop: 50 }} >
                    <Text style={title} > Company Form </Text>
                    <TextInput style={input} placeholder={'Username'} value={formData.username} onChangeText={(text) => { handleChange('username', text) }} />
                    <TextInput style={input} placeholder={'Email'} value={formData.email} onChangeText={(text) => { handleChange('email', text) }} />
                    <View style={doubleInputContainer} >
                        <TextInput style={[input, doubleInput]} placeholder={'Password'} value={formData.password} onChangeText={(text) => { handleChange('password', text) }} secureTextEntry={true} />
                        <TextInput style={[input, doubleInput]} placeholder={'Confirm Password'} value={formData.passwordConfirm} onChangeText={(text) => { handleChange('passwordConfirm', text) }} secureTextEntry={true} />
                    </View>
                    <Text style={subtitle}>Datos de la Empresa</Text>
                    <TouchableOpacity style={selectPicture} onPress={pickImage} >
                        {image != "" ?
                            <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
                            : <Text style={{ alignSelf: 'center', color: '#00000095' }}>
                                Select Picture
                            </Text>}
                    </TouchableOpacity>
                    <TextInput style={input} placeholder={'Nombre de la Empresa'} value={formData.name} onChangeText={(text) => { handleChange('name', text) }} />
                    <TextInput style={input} placeholder={'Description'} value={formData.description} onChangeText={(text) => { handleChange('description', text) }} multiline={true} numberOfLines={4} />
                    <View style={style.map}>
                        <MapView
                            style={{ width: '100%', height: '100%' }}
                            onPress={(e) => { pressMap(e) }}
                            onLayout={() => { setMapLoad(true) }}
                            initialRegion={{
                                latitude: 10.39247933617624,
                                longitude: -71.45763091742992,
                                latitudeDelta: 0.027,
                                longitudeDelta: 0.027,
                            }}
                        >
                            {mapLoad ?
                                <Marker
                                    key={1}
                                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                    title={'hey'}
                                    description={'some desc'}
                                /> : null}
                        </MapView>
                    </View>
                    <Text style={style.mapText}> Selecciona la ubicacion de tu Empresa</Text>
                    <TouchableOpacity style={[btn, { marginBottom: 100 }]} onPress={submit} >
                        <Text style={{ textAlign: 'center', color: '#eee' }}> Registrar Company </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    map: {
        width: '90%',
        height: 400,
        alignSelf: 'center',
        marginVertical: 30,
        borderColor: '#c1a97a',
        borderWidth: 10,
    }, mapText: {
        textAlign: 'center',
        fontSize: 16,
    }
})
export default CompanyForm
