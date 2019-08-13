import React, {Component} from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";

import Login from './src/components/login/Login';
import Registration from './src/components/login/Registration';

export default class FastAttendance extends Component {
        render() {
                return <AppContainer />
        }
}

const AppNavigator = createStackNavigator({
        Login: {screen: Login},
        Registration: {screen: Registration},
},
{
        initialRouteName: 'Login',
}
);

const AppContainer = createAppContainer(AppNavigator);