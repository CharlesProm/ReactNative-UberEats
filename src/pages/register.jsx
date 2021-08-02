import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ClientForm from '../components/clientForm'
import CompanyForm from '../components/companyForm'
import DriverForm from '../components/driverForm'
import formStyles from '../components/styles'
import uuid from 'react-native-uuid';

const Register = ({navigation}) => {


  const [showRegister, setShowRegister] = useState({
    client: true,
    driver: false,
    company: false
  })
  const [id, setId] = useState(uuid.v4())

  const toggleSubtitle = (type) => {
    if(type === 'Client') setShowRegister({client: true,driver: false,company: false})
    else if(type === 'Driver') setShowRegister({client: false,driver: true,company: false})
    else if(type === 'Company') setShowRegister({client: false,driver: false,company: true})
  }

  const Subtitle = (props) => {
    return (
      <TouchableOpacity
        style={props.show ? style.subtitle : style.subtitleHide}
        onPress={() => { toggleSubtitle(props.text) }} >
        <Text style={{textAlign:"center"}} >{props.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={style.generalContainer} >
      <View style={style.contentContainer} >
        <View style={style.subtitleContainer} >
          <Subtitle text='Client' show={showRegister.client}  />
          <Subtitle text='Driver' show={showRegister.driver}  />
          <Subtitle text='Company' show={showRegister.company}  />
        </View>
        <ClientForm show={showRegister.client} formStyles={formStyles} id={id} navigation={navigation} />
        <DriverForm show={showRegister.driver} formStyles={formStyles} id={id} navigation={navigation} />
        <CompanyForm show={showRegister.company} formStyles={formStyles} id={id} navigation={navigation} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  generalContainer: {
    backgroundColor: '#C84B31',
    width: '100%',
    height: '100%',
    color: '#161616',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    paddingTop: '10%',
    // padding: 15,
  }, contentContainer: {
    height: '100%',
    // backgroundColor: '#F5A962',
    width: '100%',
  }, subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }, subtitle: {
    backgroundColor: '#ECDBBA',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: -10,
    width: '33%',
  }, subtitleHide: {
    backgroundColor: '#ab956a',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: -10,
    width: '33%',
  }
})

export default Register
