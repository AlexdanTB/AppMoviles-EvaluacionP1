import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Cuentas from '../components/Cuentas'

export default function InicioScreen() {
  return (
    <View>
        <View style={styles.viewLogo}>
            <Image style={styles.logoimg}
      source={{uri: "https://upload.wikimedia.org/wikipedia/commons/4/45/Banco_Pichincha_nuevo.png"}}
      />
      <Text style={{fontSize:10, marginLeft:70}}>Ultimo ingreso: 23 ago 2025 / 11h44</Text>
        </View>
        <View style={styles.view}>
            <Text>Mis productos</Text>
            <Cuentas cuenta1 = {0}/>
        </View>
        <View>
            <Text>Operaciones</Text>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={styles.opview}>
                    <Image style={styles.opimg}source={require("../assets/images/transferir.png")}/>
                    <Text>Transferir</Text>
                    <Text>Dinero</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opview}>
                    <Image style={styles.opimg}source={require("../assets/images/pagar.png")}/>
                    <Text>Pagar</Text>
                    <Text>Servicios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opview}>
                    <Image style={styles.opimg}source={require("../assets/images/tarjetas.png")}/>
                    <Text>Pagar</Text>
                    <Text>Tarjetas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opview}>
                    <Image style={styles.opimg}source={require("../assets/images/opciones.png")}/>
                    <Text>Todas as</Text>
                    <Text>Operaciones</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    logoimg: {
        width: 250,
        height:100,
        resizeMode:"contain"
    },
    viewLogo:{
        padding:3,
        alignContent: "center"
    },
    view:{
        backgroundColor: "#e8e8e8ff",
        padding:5,
        margin:5
    },
    opview:{
        width:90,
        height:90,
        backgroundColor:"#ffffff",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        borderRadius:10,
        margin:5
    },
    opimg:{
        width: 50,
        height:50
    }
})