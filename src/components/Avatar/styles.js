import AppStyles from 'src/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 24,
        height: 48,
        overflow: 'hidden',
        width: 48
    },
    avatarLarge: {
        borderRadius: 32,
        height: 64,
        overflow: 'hidden',
        width: 64
    },
    avatarLargeView: {
        backgroundColor: AppStyles.colors.separator,
        borderRadius: 32,
        height: 64,
        width: 64
    },
    avatarView: {
        backgroundColor: AppStyles.colors.separator,
        borderRadius: 24,
        height: 48,
        width: 48
    },
    statusDot: {
        backgroundColor: AppStyles.colors.onlineGreen,
        borderColor: AppStyles.colors.white,
        borderRadius: 9,
        borderWidth: 2,
        bottom: 0,
        height: 16,
        position: 'absolute',
        right: 0,
        width: 16
    },
    statusDotLarge: {
        backgroundColor: AppStyles.colors.onlineGreen,
        borderColor: AppStyles.colors.white,
        borderRadius: 10,
        borderWidth: 2,
        bottom: 0,
        height: 20,
        position: 'absolute',
        right: 0,
        width: 20
    }
});

export default styles;
