import {Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/styles.js';

const Header = () => {
    return <View style={[styles.menuRow, {maxHeight: 50, backgroundColor: 'pink'}]}>
        <View><Text>Footer</Text></View>
    </View>;
};

export default Header;
