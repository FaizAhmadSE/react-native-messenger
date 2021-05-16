import { Platform, StatusBar, StyleSheet } from 'react-native';

import AppStyles from 'src/config/styles';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: AppStyles.colors.accentColor,
        height: APPBAR_HEIGHT
    },
    iOsStatusBar: {
        backgroundColor: AppStyles.colors.accentColor,
        height: STATUSBAR_HEIGHT
    },
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});

export default styles;
