import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CompanyCard = ({data,nav,id,cart,setCart}) => {

    const showCompany = ()=>{
        nav.navigate('CompanyClientView',{id,cart,setCart})
    }

    return (
        <TouchableOpacity style={style.card} onPress={showCompany} >
            <Text style={style.name} >{data.name}</Text>
            <Text style={style.description} >{data.description}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card:{
        // backgroundColor:'blue',
        borderWidth:1,
        borderRadius:10,
        marginVertical:10,
        width:'90%',
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
    },name:{
        width:'20%',
        textAlign:'center'
    },description:{
        width:'80%',
    }
})

export default CompanyCard
