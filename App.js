import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./components/home";
import LoginScreen from "./components/login";
import ListScreen from "./components/list";
import Store from "./store";
import ShipToListScreen from "./components/shipto-list";
import SubmitScreen from "./components/submit";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Store>
                <AppContainer/>
            </Store>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        login: { screen: LoginScreen},
        home: { screen: HomeScreen},
        list: { screen: ListScreen},
        shipto: { screen: ShipToListScreen},
        submit: { screen: SubmitScreen}
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
