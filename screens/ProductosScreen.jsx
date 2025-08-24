import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from "../assets/data/cuentas.json"
import Cuentas from '../components/Cuentas';

export default function ProductosScreen() {
    const cuentas = datos;
  return (
    <View style={styles.container}>

      <Text style={{fontSize:18}}>Mis cuentas</Text>
    <FlatList
        data = {cuentas.cuentas}
        renderItem={({item}) =>
            //<Tarjeta informacion = {item}/>
            <Cuentas cuenta1 = {item}/>
        }
    />

    </View>
  )
}

const styles = StyleSheet.create({})