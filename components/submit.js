import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BarcodeListContext, SelectedShipToContext} from "../store";

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const SubmitScreen: NavStatelessComponent = ({navigation}) => {
  const [barcodeList, setBarcodeList] = useContext(BarcodeListContext);
  const [selectedShipTo, setShipTo] = useContext(SelectedShipToContext);

  return (
    <View style={styles.container}>
      <View style={{flex: 6}}>
        <Text style={styles.title}>Ship To: {selectedShipTo.shipto}</Text>
        <Text style={styles.title}>Account: {selectedShipTo.acct}</Text>
        <Text style={styles.title}>Data:</Text><Text>{JSON.stringify(barcodeList)}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}
                        onPress={() => {}}>
        <Text style={styles.buttonText}>Send to the cloud!</Text>
      </TouchableOpacity>
    </View>
  )
};

export default SubmitScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },
  buttonContainer: {
    width: '98%',
    height: 55,
    backgroundColor: '#3185cd',
    paddingVertical: 15,
    margin: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

SubmitScreen.navigationOptions = {
  title: 'MckScan',
  headerRight: <View/>
};