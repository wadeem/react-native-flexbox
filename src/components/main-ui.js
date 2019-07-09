import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles.js';

class MainUI extends React.Component {

    render() {
        return <View style={{flexDirection: 'column', flex: 9}}>
            <View style={[styles.menuRow, {alignItems: 'flex-end'}]}>
                <View style={[styles.menuItem, {backgroundColor: 'yellow'}]}><Text>From Currency</Text></View>
                <View style={[styles.menuItem, {backgroundColor: 'green', flex: 2}]}><Text>Amount</Text></View>
                <View style={[styles.menuItem, {backgroundColor: 'blue'}]}><Text>To Currency</Text></View>
            </View>
            <View style={[styles.menuRow, {
                backgroundColor: 'lightblue',
                alignItems: 'center',
                flexDirection: 'row',
                maxHeight: 35,
            }]}>
                <View style={[styles.menuItem, {alignItems: 'flex-start', backgroundColor: '#f62dcc', flex: 3.1}]}>
                    <Text style={{backgroundColor: 'green'}}>Result</Text>
                </View>
                <View style={[styles.menuItem, {alignItems: 'center', backgroundColor: 'violet', flex: 1}]}>
                    <Text style={{backgroundColor: 'green'}}>Button</Text>
                </View>
            </View>
            <View style={[styles.menuRow, {alignItems: 'flex-start'}]}>
                <View style={styles.menuItem}>
                    <Text>Result</Text>
                </View>
            </View>
        </View>;
    }

}

export default MainUI;
