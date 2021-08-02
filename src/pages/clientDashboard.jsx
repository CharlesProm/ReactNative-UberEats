import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import formStyles from '../components/styles';
import { useIsFocused } from '@react-navigation/core';
import { getAllCompanies } from '../api/Server';
import CompanyCard from '../components/companyCard';

const ClientDashboard = ({ route, navigation }) => {

    const [companies, setCompanies] = useState(null)
    const [shoppingCart, setShoppingCart] = useState('')

    const { generalContainer ,btn} = formStyles

    const focused = useIsFocused()
    useEffect(() => {
        loadCompanies()
    }, [focused])

    const loadCompanies = async () => {
        const result = await getAllCompanies()
        setCompanies(result.result)
    }

    return (
        <View style={generalContainer} >
            <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 30 }}>Dashboard </Text>
            <FlatList data={companies}
                style={{ backgroundColor: '#000000010' }}
                renderItem={({ item }) => {
                    return <CompanyCard nav={navigation} data={item} id={item.id} />
                }}
                keyExtractor={item => item.id} />
            <TouchableOpacity style={[btn,{marginBottom:50}]} onPress={()=>{navigation.navigate('ShoppingCartView')}} >
                <Text style={{color:'#eee',textAlign:'center'}} >Shopping Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ClientDashboard
