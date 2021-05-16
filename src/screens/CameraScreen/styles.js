import AppStyles from 'src/config/styles';
import Metrics from 'src/config/metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    absoluteView: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'space-between',
        left: 0,
        position: 'absolute',
        top: 50,
        width: Metrics.screenWidth
    },
    capture: {
        alignSelf: 'center',
        backgroundColor: AppStyles.colors.grey,
        borderRadius: 75,
        flex: 0,
        margin: 20,
        padding: 15,
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: AppStyles.colors.black
    },
    head: {
        height: 50,
        padding: 16,
        width: Metrics.screenWidth
    },
    preview: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default styles;
