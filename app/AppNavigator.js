import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetails from './screens/DishDetailsScreen';
import Icon from './component/Icon';
import { useNavigation } from '@react-navigation/native';
import FavoriteDish from './screens/FavoriteDish';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#F53B50'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#fff',
            headerRight: () => (<Icon
                name='ios-menu'
                size={24} color='#fff'
                iconStyle={{}}
                action={() => navigation.toggleDrawer()}
            />)

        }}>
            <Stack.Screen name='Menu' component={MenuScreen} />
            <Stack.Screen name='DishDetails' component={DishDetails} options={({ route }) => ({ title: route.params.dish.name })} />
        </Stack.Navigator>
    )
}

const FavoriteStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#F53B50'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#fff',
            headerRight: () => (<Icon
                name='ios-menu'
                size={24} color='#fff'
                iconStyle={{}}
                action={() => navigation.toggleDrawer()}
            />)

        }}>
            <Stack.Screen name='Favorites' component={FavoriteDish} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false,


            }} >
            {/* <Drawer.Screen name='Home' component={HomeScreen} /> */}
            <Drawer.Screen name='Home' component={MenuStack} />
            <Drawer.Screen name='Favorite' component={FavoriteStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;