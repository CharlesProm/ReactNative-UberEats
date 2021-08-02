import { useIsFocused } from '@react-navigation/core';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { getAllProducts } from '../api/Server';
import ProductCard from '../components/productCard';

const CompanyDashboard = ({ route, navigation }) => {
    const { email, id, latitude, longitude, name, pass, picture, username } = route.params
    const [products, setProducts] = useState(null)
    const [data, setData] = useState({
        email,
        id,
        latitude,
        longitude,
        name,
        pass,
        picture,
        username,
    })
    /// Estado para comprobar si se esta refrescando la pagina
    const [refreshing, setRefreshing] = useState(false)
    /// Constante para verificar si la pagina viene desde otra, o si su "focus¨ cambia
    const focused = useIsFocused()
    useEffect(() => {
        loadProducts()
    }, [focused])

    const loadProducts = async () => {
        const result = await getAllProducts(data.id)
        setProducts(result)
    }

    const addProduct = () => {
        navigation.navigate('CreateProduct', { id: data.id })
    }

    return (
        <View style={style.generalContainer} >
            <Text style={style.title} > {`${name}`} </Text>

            <FlatList data={products}
                style={{backgroundColor:'#00000000'}}
                renderItem={({ item }) => {
                    return <ProductCard nav={navigation} data={item} id={item.id} />
                }}
                keyExtractor={item => item.id} />
            <View style={style.btnContainer} >
                <TouchableOpacity style={style.Btn} >
                    <Text style={{ color: '#eee' }} onPress={addProduct} >Add product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    generalContainer: {
        backgroundColor: '#ECDBBA',
        width: '100%',
        height: '100%',
        // paddingTop: 20
    }, title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 35,
        marginVertical:20
    }, btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 40,
    }, Btn: {
        paddingVertical: 15,
        width: '30%',
        backgroundColor: '#C84B31',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default CompanyDashboard
