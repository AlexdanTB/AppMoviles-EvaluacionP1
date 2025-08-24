import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from "../assets/data/transacciones.json"
import Transacciones from '../components/Transacciones';

export default function HistorialScreen() {
  const tra = datos;
  return (
    <View>
      <FlatList
              data = {tra.transacciones}
              renderItem={({item}) =>
                  //<Tarjeta informacion = {item}/>
                  <Transacciones tra1 = {item}/>
              }
          />
    </View>
  )
}

const styles = StyleSheet.create({})