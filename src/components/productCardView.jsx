import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ShoppingCart from './shoppingCartContext';

const ProductCardView = ({ data, nav, id, }) => {

    const cart = useContext(ShoppingCart)

    const pushData = async () => {
        await cart.data[1]([...cart.data[0],data])
    }
    const deleteData = async ()=>{
        cart.data[0].forEach(element => {
            if(element.id == id){
                cart.data[1](cart.data[0].filter(item => item.id !== id));

            }
        });
    }

    return (
        <View style={style.card} >
            <View style={[style.subContainer, { width: '70%' }]} >
                <Text style={style.name} >{data.name}</Text>
                <Text style={style.description} >{data.description}</Text>
            </View>
            <View style={[style.subContainer, { width: '30%' }]} >
                <TouchableOpacity onPress={pushData} >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteData} >
                    <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        // backgroundColor:'blue',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    }, name: {
        width: '40%',
        textAlign: 'center'
    }, description: {
        width: '60%',
    }, subContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-evenly',
    }
})

export default ProductCardView
