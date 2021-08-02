import React from 'react'
import { useState , useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { login } from '../api/Server';

const Login = ({navigation}) => {

  const [logUser, setLogUser] = React.useState({
    username: "",
    password: "",
  });
  const [changeBtn, setChangeBtn] = useState('Register')

  const pressSubmit = () =>{
    if(changeBtn == 'Register'){
      navigation.navigate('Register')
    }else{
      login(logUser,navigation)
    }
  }
  const handleChange = (name, value) => setLogUser({ ...logUser, [name]: value });
  useEffect(()=>{
    if(logUser.username == '' && logUser.password == ''){
      setChangeBtn('Register')
    }else{
      setChangeBtn('Login')
    }
  },[logUser])

  return (
    <View style={style.generalContainer}>
      <View style={style.contentContainer}>
        <Text style={style.title}> Welcome !</Text>
        <TextInput style={style.textInput} placeholder={'Username'} onChangeText={(text) => { handleChange('username', text) }} value={logUser.username} />
        <TextInput style={style.textInput} placeholder={'Password'} onChangeText={(text) => { handleChange('password', text) }} value={logUser.password} secureTextEntry={true} />
        <View style={{ marginTop: 70 }} >
          <TouchableOpacity style={style.btn} onPress={pressSubmit} >
            <Text style={{ textAlign: 'center', color: '#eee' }}> {changeBtn} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#ECDBBA',
    width: '100%',
    height: '100%',
    color: '#161616',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
  }, contentContainer: {
    // backgroundColor:'#346751',
    marginTop: -50,
  }, title: {
    // backgroundColor:'red',
    fontSize: 30,
    textAlign: 'center',
    color: '#161616',
    marginBottom: 50,
  }, textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#c1a97a',
    // textAlign:'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 17,
    marginVertical: 15,
    width: '80%',
    alignSelf: 'center',
  }, btn: {
    backgroundColor: '#C84B31',
    // marginVertical:20,
    width: '40%',
    alignSelf: 'center',
    paddingVertical: 13,
    borderRadius: 5,
  }
})

export default Login
