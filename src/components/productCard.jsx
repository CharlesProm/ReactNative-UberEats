import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const ProductCard = ({data,nav,id}) => {

    const goEdit = ()=>{
        nav.navigate('CreateProduct',{editing:true,id})
    }

    return (
        <TouchableOpacity onPress={goEdit} style={style.card} >
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

export default ProductCard
