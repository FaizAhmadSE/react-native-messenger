import AppStyles from 'src/config/styles';
import { StyleSheet } from 'react-native';
import { isIphoneX } from 'src/lib/isIphoneX';

const styles = StyleSheet.create({
    btn: {
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: '75%'
    },
    btnText: {
        color: '#7f8c8d',
        fontFamily: AppStyles.fonts.FONT_REGULAR,
        fontSize: 16
    },

    container: {
        backgroundColor: AppStyles.colors.black,
        borderBottomColor: AppStyles.colors.separator,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: isIphoneX() ? 100 : null,
        justifyContent: 'flex-end'
    },
    elevatedContainer: {
        backgroundColor: AppStyles.colors.black,
        borderBottomColor: AppStyles.colors.separator,
        borderBottomWidth: StyleSheet.hairlineWidth,
        elevation: 4,
        height: isIphoneX() ? 100 : null,
        justifyContent: 'flex-end'
    },
    input: {
        fontFamily: AppStyles.fonts.FONT_REGULAR,
        fontSize: 16,
        height: 40,
        paddingHorizontal: 10,
        width: '90%'
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50
    },
    searchbar: {
        backgroundColor: AppStyles.colors.white,
        elevation: 0
    },
    toolbar: {
        backgroundColor: AppStyles.colors.white
    }
});

export default styles;
