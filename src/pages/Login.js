import React from 'react'
import LoginForm from '../components/LoginForm'
import API from '../api/Server'

const Login = ({ navigation }) => {
  const [user, onChangeUser] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (name, value) => {
    onChangeUser({ ...user, [name]: value });
  }
  const sendData = async () => {
    return fetch(`${API}login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == 200) {
          onChangeUser({ username: '', password: '', })
          navigation.navigate('Menu')
        } else {
          alert(responseJson.response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return <LoginForm
    navigation={navigation}
    onChange={handleChange}
    onSubmit={sendData}
    form={user}
  />
}


export default Login