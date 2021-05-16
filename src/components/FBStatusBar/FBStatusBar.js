/* StatuBar component  
 * only works/needed on Android
 */

import { StatusBar, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const FBStatusBar = props => {
    return (
        <View
            style={[
                styles.statusBar,
                {
                    backgroundColor: props.backgroundColor
                }

            ]}
        >
            <StatusBar
                animated
                translucent
                backgroundColor={props.backgroundColor}
                barStyle="light-content"
            />
        </View>
    );
};

FBStatusBar.propTypes = {
    backgroundColor: PropTypes.string
};

export default FBStatusBar;
