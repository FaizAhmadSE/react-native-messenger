import React, { Component } from 'react';

import ChatMessenger from 'src/components/react-native-messenger';
import { View } from 'react-native';

export default class ChatScreen extends Component {
    onBackPress = () => {
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChatMessenger onBackPress={this.onBackPress} />
            </View>
        );
    }
}
