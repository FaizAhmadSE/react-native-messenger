import AppStyles from 'src/config/styles';
import Metrics from 'src/config/metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        height: Metrics.screenHeight / 3.6,
        margin: 5,
        width: Metrics.screenWidth / 2.5
    },
    cardView: {
        alignItems: 'center',
        height: Metrics.screenHeight / 3.6,
        justifyContent: 'space-between',
        width: Metrics.screenWidth / 2.5
    },
    footer: {
        alignItems: 'center',
        borderTopColor: AppStyles.colors.separator,
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingVertical: 22,
        width: Metrics.screenWidth / 2.5 - 16
    },
    last: {
        color: AppStyles.colors.grey,
        fontSize: 12,
        marginTop: 4,
        textAlign: 'center'
    },
    list: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    members: {
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'center'
    },
    nameText: {
        color: AppStyles.colors.black,
        fontSize: 15,
        marginTop: 8,
        textAlign: 'center'
    },
    nameView: {
        alignItems: 'center',
        padding: 8,
        paddingTop: 16
    }
});

export default styles;
