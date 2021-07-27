import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import CompanyForm from '../components/CompanyForm'
import API from '../api/Server'

const Company = ({ navigation }) => {
  const [company, setCompany] = React.useState({});
  const [companies, setCompanies] = React.useState([])
  const [detail, setDetail] = useState(false)




  useEffect(() => {
    console.log("useEffect")
    getCompanies();
  }, []);

  const detailCompanyChange = (name, value) => {
    setCompany({ ...company, [name]: value });
  }

  const detailCompany = (data) => {
    setCompany(data)
    setDetail(true)
  }

  const sendCompany = async () => {
    return fetch(`${API}company/data`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    }).then((response) => response.json())
      .then((responseJson) => {
        refresListCompany(responseJson.response, true)
        setDetail(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getCompanies = async () => {
    return fetch(`${API}company/get`)
      .then(response => response.json())
      .then(data => {
        setCompanies(data.response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteCompanies = async () => {
    return fetch(`${API}company/delete`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    }).then((response) => response.json())
      .then((responseJson) => {
        refresListCompany(company, false)
        setDetail(false)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const refresListCompany = (data, status) => {
    let isNew = true
    let s = companies
    if (status) {
      for (let i = 0; i < s.length; i++) {
        if (s[i].id_empresa == data.id_empresa) {
          s[i] = data
          isNew = false
        }
      }
      if (isNew) {
        s.push(data)
      }
    } else {
      for (let i = 0; i < s.length; i++) {
        if (s[i].id_empresa == data.id_empresa) {
          s.splice(i, 1);
        }
      }
    }
    setCompanies(s)
    setCompany({})
    setDetail(false)
  }

  const AddCompany = () => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtnLogin}
          onPress={() => setDetail(true)}
        >
          <Text style={styles.btnText}>Agregar empresa</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (companies.length == 0)
    return <View style={styles.container}>
      <Text>No hay empresas registradas</Text>
    </View>

  if (!detail)
    return <View style={styles.container}>
      <ScrollView>

        {companies.map(item => (
          <View key={item.id_empresa}>
            <Text style={styles.item} onPress={() => detailCompany(item)}>{item.nombre}</Text>
          </View>
        ))
        }
      </ScrollView>
      <AddCompany />
    </View>


  if (detail)
    return <View style={styles.container}>
      <CompanyForm
        form={company}
        onChange={detailCompanyChange}
        onSubmit={sendCompany}
        deleteCompanies={deleteCompanies}
      />
    </View>

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userBtnLogin: {
    backgroundColor: "#ffd700",
    padding: 15,
    width: "43.5%",
    marginRight: 10,
  },
  btnText: {
    fontSize: 18,
    textAlign: "center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "#96BAFF",
    fontSize: 15,
    width: 350
  }


});


export default Company