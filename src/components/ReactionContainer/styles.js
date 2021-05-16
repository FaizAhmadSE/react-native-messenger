import Metrics from 'src/config/metrics';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 30
    },
    list: {
        overflow: 'visible'
    },
    reactView: {
        alignItems: 'center',
        height: 58,
        justifyContent: 'center',
        width: (Metrics.screenWidth - 24) / 6
    },
    reaction: {
        height: 40,
        marginBottom: 4,
        width: 40
    }
});

export default styles;
