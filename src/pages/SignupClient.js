import React from 'react'
import SignupClientForm from '../components/SignupClientForm'
import API from '../api/Server'

const SignupClient = ({ navigation }) => {

  const [newUser, onChangeNewUser] = React.useState({
    username: '',
    first_name: '',
    second_name: '',
    first_lastname: '',
    second_lastname: '',
    birthdate: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const ClientDataChange = (name, value) => {
    onChangeNewUser({ ...newUser, [name]: value });
  }
  const sendData = async () => {
    if (newUser.username != '' &&
      newUser.first_name != '' &&
      newUser.second_name != '' &&
      newUser.first_lastname != '' &&
      newUser.second_lastname != '' &&
      newUser.birthdate != '' &&
      newUser.email != '' &&
      newUser.password != '' &&
      newUser.passwordConfirm != ''
    ) {
      if (newUser.password != newUser.passwordConfirm) {
        alert("Las contraseñas son diferentes, intente de nuevo")
        return
      }
      return fetch(`${API}client/data`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 200) {
            navigation.navigate('Inicio de sesión')
          } else {
            alert(responseJson.response)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      alert("Por favor complete el formulario")
    }

  }

  return <SignupClientForm
    navigation={navigation}
    onChangeText={ClientDataChange}
    onPress={sendData}
    form={newUser}
  />
}

export default SignupClient