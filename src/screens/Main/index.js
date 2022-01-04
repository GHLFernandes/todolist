import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import useToDoList from '../../hooks/useToDoList';
import estilo from './styles';

const Main = () => {
    const [produto, setProduto] = useState('');
    const [state, add, check, del] = useToDoList();

    return (
        <SafeAreaView style={estilo.container}>
            <StatusBar
                barStyle='dark-content'
                 />
            <View style={estilo.inputContainer}>
                <TextInput style={estilo.input}
                    placeholder="Adicionar Produto"
                    placeholderTextColor={'#f2f2f2'}
                    value={produto}
                    onChangeText={text => setProduto(text)}
                />
                <TouchableOpacity style={estilo.addBtn}
                    onPress={() => {
                        add(produto);
                        setProduto('');
                    }} >
                    <Text style={estilo.addBtnTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <View style={estilo.itemsContainer}>
                        <TouchableOpacity style={estilo.itemBtn}
                            onPress={() => { check(item.id) }}>
                            <Text style={[estilo.listItem, item.check ? estilo.listItemChecked : '']} >{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilo.delBtn}
                            onPress={() => { del(item.id) }}>
                            <FontAwesome name="trash-o" size={25} color="red" />
                        </TouchableOpacity>
                    </View>
                )
                } />

        </SafeAreaView >
    )
}

export default Main;
