import {
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import React, { Component } from 'react';

import InputModule from './InputModule';
import KeyboardSpacer from '../KeyboardSpacer';
import Toolbar from './Toolbar';

export default class Messenger extends Component {
    onBackPress = () => {
        this.props.onBackPress();
    };

    dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar onBackPress={this.onBackPress} />
                <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>
                <InputModule />
                {Platform.OS === 'ios' && <KeyboardSpacer />}
            </View>
        );
    }
}
