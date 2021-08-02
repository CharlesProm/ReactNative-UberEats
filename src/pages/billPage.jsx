import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import formStyles from '../components/styles'
import PDFReader from 'rn-pdf-reader-js'

const BillPage = ({ route }) => {

    const { generalContainer ,btn} = formStyles

    return (
        <View style={generalContainer} >
            <View style={style.pdfContainer} >
                <PDFReader source={{ uri: route.params.uri }} />
            </View>
            <View style={style.btnContainer} >
                <TouchableOpacity style={btn} >
                    <Text style={{textAlign:'center',color:'#eee'}} >Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btn} >
                    <Text style={{textAlign:'center',color:'#eee'}} >Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    pdfContainer: {
        height:'80%'
    },btnContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})

export default BillPage
