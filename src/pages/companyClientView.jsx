import React, { useEffect, useState } from 'react'
import { View, Text,  StyleSheet, ScrollView, } from 'react-native'
import { getAllProducts, getCompanyData } from '../api/Server'
import MapView, { Marker } from 'react-native-maps';
import formStyles from '../components/styles'
import ProductCardView from '../components/productCardView';

const CompanyClientView = ({ route ,navigation,}) => {

    const [mapLoad, setMapLoad] = useState(false)
    const [products, setProducts] = useState(null)
    const [data, setData] = useState({
        name: '',
        description: '',
        id: '',
        longitude: 0,
        latitude: 0,
    })

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const companyData = await getCompanyData(route.params.id)
        const companyProducts = await getAllProducts(route.params.id)
        setProducts(companyProducts)
        setData(companyData.result[0])
    }

    const {generalContainer,title} = formStyles

    return (
        <View style={generalContainer} >
            <Text style={[title, { marginTop: 20, fontSize: 30 }]} > {data.name}</Text>
            <ScrollView>
            <Text style={[title, { fontSize: 17 }]} > {data.description}</Text>
                <View style={style.map}>
                    <MapView
                        style={{ width: '100%', height: '100%' }}
                        onLayout={() => { setMapLoad(true) }}
                        initialRegion={{
                            latitude: 10.39247933617624,
                            longitude: -71.45763091742992,
                            latitudeDelta: 0.027,
                            longitudeDelta: 0.027,
                        }}
                    >
                        {mapLoad ?
                            <Marker
                                key={1}
                                coordinate={{ latitude: parseFloat(data.latitude), longitude: parseFloat(data.longitude) }}
                                title={''}
                                description={''}
                            /> : null}
                    </MapView>
                </View>
                <Text style={{textAlign:'center',marginBottom:20,fontSize:20}} >Products</Text>
                <View>
                    {products !=null ? products.map((prop,key)=>{
                        return(
                            <ProductCardView key={key} data={prop} id={prop.id} />
                        )
                    }) : null}
                </View>
                {/* <TouchableOpacity onPress={clgData} >
                    <Text>Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</Text>
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    map: {
        width: '90%',
        height: 300,
        alignSelf: 'center',
        marginBottom: 30,
        borderColor: '#c1a97a',
        borderWidth: 10,
    }
})


export default CompanyClientView
