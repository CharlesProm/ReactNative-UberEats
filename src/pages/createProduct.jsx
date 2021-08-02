import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { addProduct, deleteProduct, getProduct,updateProduct } from '../api/Server'
import formStyles from '../components/styles'
import uuid from 'react-native-uuid';
import { useEffect } from 'react'

const CreateProduct = ({route,navigation}) => {

    const editing = route.params.editing

    const [data, setData] = useState({
        name:'',
        description:'',
        price:'',
        owner:route.params.id,
        id:uuid.v4()
    })
    const handleChange = (name, value) => setData({ ...data, [name]: value });
    const {input,generalContainer,btn} = formStyles

    const submit = ()=>{
        if(editing){
            updateProduct(data,navigation)
        }else{
            addProduct(data,navigation)
        }
    }
    const deletePress = ()=>{
        deleteProduct(data.id,navigation)
    }

    useEffect(() => {
        if(editing){
            (async () => {
                const result = await getProduct(route.params.id)
                setData(result[0])
            })();
        }
    }, [])

    return (
        <View style={generalContainer} >
            <TextInput autoCompleteType={'off'} style={input} placeholder={'Nombre del producto'} value={data.name} onChangeText={(text) => { handleChange('name', text) }} />
            <TextInput autoCompleteType={'off'} style={input} placeholder={'Nombre del producto'} value={data.description} onChangeText={(text) => { handleChange('description', text) }} multiline={true} numberOfLines={4} />
            <TextInput autoCompleteType={'off'} style={[input,{width:'30%'}]} placeholder={'Precio $'} value={data.price} onChangeText={(text) => { handleChange('price', text) }} keyboardType={'number-pad'} />
            <TouchableOpacity style={btn} onPress={submit} >
                <Text style={{textAlign:'center',color:'#eee'}} >{editing ? 'Editar Producto' : 'Add'}</Text>
            </TouchableOpacity>
            {editing? <TouchableOpacity style={btn} onPress={deletePress} >
                    <Text style={{ textAlign: 'center', color: '#eee' }} >{editing ? 'Eliminar Producto' : null}</Text>
                </TouchableOpacity>: null}
        </View>
    )
}

export default CreateProduct
