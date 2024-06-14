import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/'
import { Home } from './pages/index'
import { Dieta } from './pages/paginaDieta'
import { Estudo } from './pages/paginaEstudo'
import { Saude } from './pages/paginaSaude'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#FFD670"} name="pizza" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="pizza-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Dieta"
                component={Dieta}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#A7C957"} name="barbell" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="barbell-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Estudo"
                component={Estudo}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#57B8FF"} name="school" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="school-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Saude"
                component={Saude}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#FF5656"} name="medkit" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="medkit-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}