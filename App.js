import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <AppContainer/>;
    }
}

const AppNavigator = createStackNavigator(
    {
        login: LoginScreen,
        home: HomeScreen
    },
    {
        initialRouteName: "login",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3185cd'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);