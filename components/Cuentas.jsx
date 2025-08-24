import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Cuentas(info) {
    console.log(info.cuenta1.nombre)
  return (
    <TouchableOpacity style={styles.tv}>
        <View style={{marginRight:100}}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>{info.cuenta1.nombre}</Text>
            <Text>Nro. {info.cuenta1.numero_cuenta}</Text>
        </View>
        <View>
            <Text style={{fontSize:18}}>$ {info.cuenta1.saldo_disponible}</Text>
            <Text>Saldo disponible</Text>   
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    tv:{
        flexDirection:"row",
        margin:8,
        borderColor: "#d5d5f0ff",
        borderRadius: 8,
        borderWidth:1,
        padding:20,
        backgroundColor: "#ffffff"
    }
})