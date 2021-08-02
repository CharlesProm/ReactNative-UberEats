import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import formStyles from '../components/styles'
import ShoppingCart from '../components/shoppingCartContext';
import * as Print from 'expo-print';
import * as MediaLibrary from "expo-media-library";

// import html from '../components/factura'


const ShoppingCartView = ({navigation}) => {

    const cart = useContext(ShoppingCart)
    const { generalContainer, title, btn } = formStyles

    const ShowProduct = ({ data }) => {
        return (
            <View style={style.card}>
                <Text style={style.name} >{data.name}</Text>
                <Text style={style.description} >{data.price + ' $'}</Text>
            </View>
        )
    }

    const htmlData = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    
    <body>
        <style type="text/css">
            div.container{
                display: flex;
            }
            p.name {
                margin-right: 100px;
            }
          </style>
        <h1>FACTURA</h1>
        <div>
            ${cart.data[0] != null ? cart.data[0].map((prop, key) => {
        return (
            `<div class="container" >
                    <p class="name" >${prop.name}</p>
                    <p class="name" >${prop.price + '$'}</p>
                </div>`
        )
    }) : null}
            </div>
        </div>
    </body>`


    const createAndSavePDF = async (html) => {
        try {
            const { uri } = await Print.printToFileAsync({ html }); {
                const permission = await MediaLibrary.requestPermissionsAsync();
                if (permission.granted) {
                    const asset = await MediaLibrary.createAssetAsync(uri);
                    navigation.navigate('BillPage',{uri:asset.uri})
                }
            }

        } catch (error) {
            console.error(error + 'err');
        }
    };





    return (

        <ScrollView style={generalContainer} >
            <Text style={title} >Shopping Cart</Text>
            {cart.data[0] != null ? cart.data[0].map((prop, key) => {
                return (
                    <ShowProduct key={key} data={prop} />
                )
            }) : null}
            <TouchableOpacity style={btn} onPress={() => { createAndSavePDF(htmlData) }} >
                <Text style={{ color: '#eee', textAlign: 'center' }} > Realizar Compra </Text>
            </TouchableOpacity>
        </ScrollView>
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
        width: '20%',
        textAlign: 'center'
    }, description: {
        width: '80%',
    }, subContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-evenly',
    }
})

export default ShoppingCartView
