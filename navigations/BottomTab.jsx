import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "../screens/InicioScreen";
import ProductosScreen from "../screens/ProductosScreen";
import HistorialScreen from "../screens/HistorialScreen";
import PerfilScreen from "../screens/PerfilScreen";
import { NavigationContainer } from "@react-navigation/native";

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator()
function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Inicio">
            <Tab.Screen name="Inicio" component={InicioScreen}
            options={{
                tabBarIcon: ()=> <Feather name="home" size={24} color="black" />
            }}/>
            <Tab.Screen name="Productos" component={ProductosScreen}
            options={{
                tabBarIcon: ()=> <MaterialCommunityIcons name="wallet-outline" size={24} color="black" />
            }}/>
            <Tab.Screen name="Historial" component={HistorialScreen}
            options={{
                tabBarIcon: ()=> <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
            }}/>
            <Tab.Screen name="Perfil" component={PerfilScreen}
            options={{
                tabBarIcon: ()=> <Feather name="user" size={24} color="black" />
            }}/>
        </Tab.Navigator>
    )
}
export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}