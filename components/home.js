import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProductScanRNCamera from "./product-scanner";
import DisplayRecentPic from "./display-recent-pic";

interface NavStatelessComponent extends React.StatelessComponent {
    navigationOptions?: Object
}

const HomeScreen: NavStatelessComponent = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>McKesson Scan</Text>
            <ProductScanRNCamera />
            <DisplayRecentPic />
            <TouchableOpacity style={styles.buttonContainer}
                              onPress={() => navigation.navigate('list')}>
                <Text style={styles.buttonText}>Go To List</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HomeScreen;

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
    },
    buttonContainer: {
        backgroundColor: '#3185cd',
        padding: 8,
        margin: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

HomeScreen.navigationOptions = {
    title: 'MckScan',
    headerRight: <View />
};

HomeScreen.propTypes = {
    /*
    ...
    */
};

// export default class HomeScreen extends Component {
//     static navigationOptions = {
//         title: 'MckScan',
//         headerRight: <View />
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.title}>McKesson Scan</Text>
//                 <ProductScanRNCamera />
//             </View>
//         )
//     }
// }

