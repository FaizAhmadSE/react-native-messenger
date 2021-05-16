import { createAppContainer, createStackNavigator } from 'react-navigation';

import { BottomTabNavigation } from './BottomTabNavigation';
import CameraScreen from 'src/screens/CameraScreen';
import ChatScreen from 'src/screens/ChatScreen';
import React from 'react';
import SearchHeader from 'src/components/SearchHeader';
import SearchScreen from 'src/screens/SearchScreen';
import SplashScreen from 'src/screens/SplashScreen';

const SearchStack = createStackNavigator(
    {
        BottomTabNavigation: {
            screen: BottomTabNavigation,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        SearchScreen: {
            screen: SearchScreen,
            navigationOptions: { gesturesEnabled: false }
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

const ModalStack = createStackNavigator(
    {
        SearchStack: {
            screen: SearchStack,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
                header: <SearchHeader navigation={navigation} />
            })
        },
        CameraScreen: {
            screen: CameraScreen,
            navigationOptions: { gesturesEnabled: false, header: null }
        }
    },
    {
        mode: 'modal'
    }
);

const MessengerApp = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: { gesturesEnabled: false, header: null }
    },
    MainScreen: {
        screen: ModalStack,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    },
    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: { gesturesEnabled: false, header: null }
    }
});

export default createAppContainer(MessengerApp);
