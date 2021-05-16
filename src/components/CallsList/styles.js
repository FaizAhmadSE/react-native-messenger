import AppStyles from 'src/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    groupView: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 12
    },
    grpIcn: {
        paddingHorizontal: 16
    },
    grpText: {
        fontSize: 15
    },
    hView: {
        backgroundColor: AppStyles.colors.lightWhite
    },
    head: {
        color: AppStyles.colors.black,
        fontSize: 16,
        textAlign: 'left'
    },
    header: {
        color: AppStyles.colors.grey,
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    nameView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    sub: {
        color: AppStyles.colors.grey,
        paddingTop: 4
    }
});

export default styles;
