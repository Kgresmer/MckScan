import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, TouchableWithoutFeedback,
    StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                    <TouchableWithoutFeedback accessible={false} style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                       source={require('../images/mcklogo.png')}>
                                </Image>
                                <Text style={styles.title}>Product Scanner</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                           placeholder="Username"
                                           placeholderTextColor='rgba(0,0,0,0.8)'
                                           returnTypeKey='next'
                                           autoCorrect={false}
                                           onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                           placeholder="Password"
                                           placeholderTextColor='rgba(0,0,0,0.8)'
                                           returnTypeKey='go'
                                           secureTextEntry
                                           autoCorrect={false}
                                           ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => this.props.navigation.navigate('shipto')}>
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 316,
        height: 92
    },
    title: {
        color: '#3185cd',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'white'
    },
    input: {
        height: 40,
        backgroundColor: '#DEF2FF',
        marginBottom: 15,
        color: '#3185cd',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#3185cd',
        paddingVertical: 15,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})