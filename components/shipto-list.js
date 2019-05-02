import React, {useContext} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckBox} from "react-native-elements";
import {SelectedShipToContext, ShipToListContext} from "../store";

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const ShipToListScreen: NavStatelessComponent = ({navigation}) => {
  const [selectedShipTo, setShipTo] = useContext(SelectedShipToContext);
  const [shipToList, setShipToList] = useContext(ShipToListContext);

  const shipToChange = (item) => {
    const tempList = [];
    for (let i = 0; i < shipToList.length; i++) {
      if (shipToList[i].key === item.key) {
        shipToList[i].active = true;
        setShipTo(item);
      } else {
        shipToList[i].active = false;
      }
      tempList.push(shipToList[i]);
    }
    setShipToList(tempList);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>Select your account and shipto</Text>
      <FlatList
        data={shipToList}
        extraData={selectedShipTo}
        renderItem={({item}) =>
          <View style={styles.item}>
            <CheckBox style={{flex: 2}}
                      checked={item.active}
                      checkedColor={'white'}
                      uncheckedColor={'white'}
                      onPress={() => shipToChange(item)}
                      onIconPress={() => shipToChange(item)}
            />
            <View style={styles.dataView}>
              <Text style={styles.dataFont}>Ship To: {item.shipto}</Text>
              <Text style={styles.dataFont}>Account: {item.acct}</Text>
            </View>
          </View>
        }
      />
      {selectedShipTo.active && (<TouchableOpacity style={styles.buttonContainer}
                                            onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>Go to Scanner</Text>
      </TouchableOpacity>)}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3185cd',
    padding: 5,
    marginTop: 5
  },
  dataView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 50,
  },
  dataFont: {
    flex: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  removeFont: {
    flex: 1,
    height: 16,
    width: 16,
    padding: 5
  },
  selectButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: 'red',
    margin: 10,
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
});

ShipToListScreen.navigationOptions = {
  title: 'Where to?',
  headerRight: <View/>
};


export default ShipToListScreen;