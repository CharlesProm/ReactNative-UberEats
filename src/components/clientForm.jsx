import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment';
import DatePicker from './datePicker';
import {registerClient} from '../api/Server'


const ClientForm = ({ show, formStyles,id,navigation }) => {

    const { generalContainer, hide, title, input, doubleInputContainer, doubleInput, btn } = formStyles
    const handleChange = (name, value) => setFormData({ ...formData, [name]: value })

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        id:id,
        date: moment.utc().format('YYYY-MM-DD')
    })
    const handleSubmit = () => {
        if(formData.password == formData.passwordConfirm) registerClient(formData,navigation)
        else Alert.alert('Las contraseñas no coinciden')
    }
    return (
        <View style={show ? generalContainer : hide}>
            <View style={{ marginTop: 50 }} >
                <Text style={title} > Client Form </Text>
                <TextInput autoCompleteType={'off'} style={input} placeholder={'Username'} value={formData.username} onChangeText={(text) => { handleChange('username', text) }} />
                <TextInput autoCompleteType={'off'} style={input} placeholder={'Email'} value={formData.email} onChangeText={(text) => { handleChange('email', text) }} />
                <View style={doubleInputContainer} >
                    <TextInput autoCompleteType={'off'} style={[input, doubleInput]} value={formData.password} placeholder={'Password'} secureTextEntry={true} onChangeText={(text) => { handleChange('password', text) }} />
                    <TextInput autoCompleteType={'off'} style={[input, doubleInput]} value={formData.passwordConfirm} placeholder={'Confirm Password'} secureTextEntry={true} onChangeText={(text) => { handleChange('passwordConfirm', text) }} />
                </View>
                <DatePicker formData={formData} setFormData={setFormData}  date={formData.date} styles={formStyles} />
                <TouchableOpacity style={btn} onPress={handleSubmit}  >
                    <Text style={{ textAlign: 'center', color: '#eee' }}> Registrar Cliente </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default ClientForm
