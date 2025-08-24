import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function PerfilScreen() {
  return (
    <View>
      <Text style={styles.titulo}>Informacion de perfil</Text>
      <View>
        <TouchableOpacity style={styles.view}>
          <Image style={styles.imgico} source={require("../assets/images/usuario.png")}/>
          <View>
            <Text style={styles.tit}>Nombre completo</Text>
            <Text>Alex Daniel Toapanta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Image style={styles.imgico} source={require("../assets/images/saludo.png")}/>
          <View>
            <Text style={styles.tit}>Saludo de bienvenida</Text>
            <Text>Alex</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Image style={styles.imgico} source={require("../assets/images/carpeta.png")}/>
          <View>
            <Text style={styles.tit}>Autorización de uso de datos</Text>  
            <Text>Estado: Autorizado</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Mantén actualizada tu información</Text>
      <View>
        <TouchableOpacity style={styles.view}>
          <Image style={styles.imgico} source={require("../assets/images/celular.png")}/>
          <View>
            <Text style={styles.tit}>Número de celular</Text>
            <Text>0963849684</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view}>
          <Image style={styles.imgico} source={require("../assets/images/correo.png")}/>
          <View>
            <Text style={styles.tit}>Correo Electrónico</Text>
            <Text>alexdanieltb220@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    padding:12,
    flexDirection:"row",
    borderColor:"#d6d6eaff",
    borderWidth: 1,
    width:350
  },
  imgico:{
    width:40,
    height:40,
    marginRight:20
  },
  tit:{
    fontWeight:"bold",
    fontSize:16
  },
  titulo:{
    fontSize:17,
    fontWeight:"bold",
    margin:8
  }

})