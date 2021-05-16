import ActiveScreen from 'src/screens/ActiveScreen';
import AppStyles from 'src/config/styles';
import CallsScreen from 'src/screens/CallsScreen';
import GroupsScreen from 'src/screens/GroupsScreen';
import MessagesScreen from 'src/screens/MessagesScreen';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

export const HomeTabNavigation = createMaterialTopTabNavigator(
    {
        MessagesScreen: {
            screen: MessagesScreen,
            navigationOptions: { header: null, title: 'Messages' }
        },

        ActiveScreen: {
            screen: ActiveScreen,
            navigationOptions: { header: null, title: 'Active' }
        },
        GroupsScreen: {
            screen: GroupsScreen,
            navigationOptions: { header: null, title: 'Groups' }
        },
        CallsScreen: {
            screen: CallsScreen,
            navigationOptions: { header: null, title: 'Calls' }
        }
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: AppStyles.colors.accentColor,
            inactiveTintColor: AppStyles.colors.inactiveGreyColor,
            pressColor: AppStyles.colors.lightGreyCOlor,
            labelStyle: {
                fontWeight: 'bold',
                fontSize: Platform.OS === 'ios' ? 11 : 12,
                fontFamily: AppStyles.fonts.FONT_MEDIUM
            },
            indicatorStyle: {
                backgroundColor: AppStyles.colors.accentColor
            },
            style: {
                backgroundColor: 'white'
            }
        }
    }
);
