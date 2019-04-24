import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductScanRNCamera from "./product-scanner";

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'MckScan',
        headerRight: <View />
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>McKesson Scan</Text>
                <ProductScanRNCamera />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue'
    }
})