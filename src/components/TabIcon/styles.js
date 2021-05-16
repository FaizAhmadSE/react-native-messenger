import AppStyles from 'src/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rounded: {
        alignItems: 'center',
        backgroundColor: AppStyles.colors.inactiveGreyColor,
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        width: 40
    }
});

export default styles;
