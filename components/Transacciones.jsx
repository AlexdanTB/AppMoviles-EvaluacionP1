import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Transacciones(info) {
    console.log(info.tra1)
  return (
    <TouchableOpacity style={styles.tot}>
        <Text style={{color:"#8a90b9ff"}}>{info.tra1.fecha}</Text>
        <Text style={{fontWeight:"bold", fontSize:18}}>$ {info.tra1.monto}</Text>
        <Text>Saldo actual: {info.tra1.saldo_actual}</Text>
        <Text>{info.tra1.descripcion}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    tot:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor: "#939ebdff"
    }
})