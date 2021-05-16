import React, { Component } from 'react';

import GroupsList from 'src/components/GroupsList';
import { View } from 'react-native';
import styles from './styles';

export default class GroupsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GroupsList />
            </View>
        );
    }
}
