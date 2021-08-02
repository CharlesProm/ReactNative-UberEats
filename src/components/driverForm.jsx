import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import DatePicker from './datePicker';
import moment from 'moment';
import { registerDriver } from '../api/Server';

const DriverForm = ({ show, formStyles, id ,navigation}) => {

    const [image, setImage] = useState('')
    const [formData, setFormData] = useState({
        username: "",
        firstname: "",
        secondname: "",
        email: "",
        password: "",
        passwordConfirm: "",
        model: "",
        plate: "",
        color: "",
        date: moment.utc().format('YYYY-MM-DD'),
        id: id,
    })

    const { generalContainer, hide, title, input, doubleInputContainer, doubleInput, subtitle, btn, selectPicture, } = formStyles


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

    const submit = async () => {
        if (formData.password == formData.passwordConfirm) {
            const newFormData = new FormData()
            newFormData.append('image', { uri: image, name: `${id}_driver.jpg`, type: 'image/jpeg' })
            for(const key in formData){
                newFormData.append(`${key}`,formData[key])
            }
            registerDriver(newFormData,navigation)
        } else {
            Alert.alert('Las contraseñas no coinciden')
        }
    }


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);


    return (
        <View style={show ? generalContainer : hide}>
            <ScrollView style={{ paddingTop: 50 }} >
                <Text style={title} > Diver Form </Text>
                <TouchableOpacity style={selectPicture} onPress={pickImage} >
                    {image != "" ?
                        <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
                        : <Text style={{ alignSelf: 'center', color: '#00000095' }}>
                            Select Picture
                        </Text>}
                </TouchableOpacity>
                <TextInput style={input} placeholder={'Username'} value={formData.username} onChangeText={(text) => { handleChange('username', text) }} />
                <View style={doubleInputContainer} >
                    <TextInput style={[input, doubleInput]} placeholder={'Name'} value={formData.firstname} onChangeText={(text) => { handleChange('firstname', text) }} />
                    <TextInput style={[input, doubleInput]} placeholder={'Second Name'} value={formData.secondname} onChangeText={(text) => { handleChange('secondname', text) }} />
                </View>
                <TextInput style={input} placeholder={'Email'} onChangeText={(text) => { handleChange('email', text) }} />
                <View style={doubleInputContainer} >
                    <TextInput style={[input, doubleInput]} placeholder={'Password'} value={formData.password} secureTextEntry={true} onChangeText={(text) => { handleChange('password', text) }} />
                    <TextInput style={[input, doubleInput]} placeholder={'Confirm Password'} value={formData.passwordConfirm} secureTextEntry={true} onChangeText={(text) => { handleChange('passwordConfirm', text) }} />
                </View>
                <DatePicker formData={formData} setFormData={setFormData} date={formData.date} styles={formStyles} />
                <Text style={subtitle}>Datos del Vehiculo</Text>
                <TextInput style={input} placeholder={'Model'} value={formData.model} onChangeText={(text) => { handleChange('model', text) }} />
                <View style={doubleInputContainer} >
                    <TextInput style={[input, doubleInput]} value={formData.plate} placeholder={'Plate'} onChangeText={(text) => { handleChange('plate', text) }} />
                    <TextInput style={[input, doubleInput]} value={formData.color} placeholder={'Color'} onChangeText={(text) => { handleChange('color', text) }} />
                </View>

                <TouchableOpacity style={[btn, { marginBottom: 150 }]} onPress={submit} >
                    <Text style={{ textAlign: 'center', color: '#eee' }}> Registrar Conductor </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


export default DriverForm
