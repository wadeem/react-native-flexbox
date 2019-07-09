import React from 'react';
import {View} from 'react-native';
import MainUI from './src/components/main-ui.js';
import Header from './src/components/header.js';
import Footer from './src/components/footer.js';

class App extends React.Component {

    render() {
        return <View style={{flex: 3, flexDirection: 'column'}}>
            <Header/>
            <MainUI/>
            <Footer/>
        </View>;
    }
}

export default App;

