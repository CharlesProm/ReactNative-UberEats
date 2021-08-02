const API = {}
// const url = "http://192.168.1.108:3000/";
import { Alert } from "react-native";

const url = "https://ubereats-reactnative.herokuapp.com/";

///////////////////////////////////////////////// REGISTER

export const registerClient = async (data, navigation) => {
    const res = fetch(`${url}register/client`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(data => {
            if (data.status == 200 || data.status == 404) {
                navigation.navigate('Login')
                Alert.alert(data.result)
            } else if (data.status == 403) {
                Alert.alert(data.result)
            }
        })
        .catch(err => { Alert.alert('Ha ocurrido un error al procesar sus datos') })
}

export const registerDriver = async (data, navigation) => {
    const res = fetch(`${url}register/driver`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: data
    }).then(res => res.json())
        .then(data => {
            if (data.status == 200 || data.status == 404) {
                navigation.navigate('Login')
                Alert.alert(data.result)
            } else if (data.status == 403) {
                Alert.alert(data.result)
            }
        })
        .catch(err => {
            console.log(err)
            Alert.alert('Ha ocurrido un error al procesar sus datos')
        })
}

export const registerCompany = async (data, navigation) => {
    const res = fetch(`${url}register/company`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: data
    }).then(res => res.json())
        .then(data => {
            if (data.status == 200 || data.status == 404) {
                navigation.navigate('Login')
                Alert.alert(data.result)
            } else if (data.status == 403) {
                Alert.alert(data.result)
            }
        })
        .catch(err => { Alert.alert('Ha ocurrido un error al procesar sus datos') })
}

/////////////////////////////////////////////////////// DASHBOARD

export const login = async (data,navigation) => {
    const res = fetch(`${url}login`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(res => {
            if(res.type == 1 && res.status == 200){
                navigation.navigate('ClientDashboard',res.result[0])
                
            }else if(res.type == 2 && res.status == 200){
                
            }else if(res.type == 3 && res.status == 200){
                navigation.navigate('CompanyDashboard',res.result[0])
            }else if(res.status == 404){
                Alert.alert(res.result)
            }
        })
        .catch(err => { Alert.alert('Ha ocurrido un error al procesar sus datos') })
}

export const addProduct = async (data,navigation) =>{
    const res = fetch(`${url}product/add`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(data => {
        if(data.status == 200){
            navigation.goBack()
            Alert.alert(data.result)
        }else if(data.status == 404){
            Alert.alert(data.result)
        }
    })
    .catch(err=>console.log(err))
}

export const getAllProducts= async (id)=>{
    const result = fetch(`${url}products/${id}`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    return (await result).json()
}

export const getProduct = async (id)=>{
    const result = fetch(`${url}product/${id}`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    return (await result).json()
}

export const updateProduct = async (data,navigation)=>{
    const result = fetch(`${url}product/update`,{
        method:'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.status==200){
            navigation.goBack()
            Alert.alert(data.result)
        }else if(data.status==404){
            Alert.alert(data.result)
        }
    })
}

export const deleteProduct = async (id,navigation)=>{
    const newId = {id}
    const result = fetch(`${url}product/delete`,{
        method:'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newId)
    }).then(res=> res.json())
    .then(data=>{
        if(data.status==200){
            navigation.goBack()
            Alert.alert(data.result)
        }else if(data.status==404){
            Alert.alert(data.result)
        }
    })
}

export const getAllCompanies = async ()=>{
    const result = fetch(`${url}companies`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    return (await result).json()
}

export const getCompanyData = async (id)=>{
    const result = fetch(`${url}company/${id}`,{
        method:'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    return (await result).json()
}


export default API

