import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View, CheckBox} from 'react-native';

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const ShipToListScreen: NavStatelessComponent = ({ navigation }) => {

  let checked = null;

  const shipToChange = (item) => {
    for (let i = 0; i < shiptoList.length; i++) {
      if (shiptoList[i].key === item.key) {
        shiptoList[i].active = true;
        checked = item;
      } else {
        shiptoList[i].active = false;
      }
    }
  };

  const shiptoList = [
    {
      key: 1,
      shipto: 54556632,
      acct: 54464432,
      active: false
    },
    {
      key: 2,
      shipto: 14516632,
      acct: 14464432,
      active: false
    },
    {
      key: 3,
      shipto: 24556632,
      acct: 34464432,
      active: false
    },
    {
      key: 4,
      shipto: 61884,
      acct: 225472,
      active: false
    },
    {
      key: 5,
      shipto: 3211144,
      acct: 1113253,
      active: false
    },
    {
      key: 6,
      shipto: 68181,
      acct: 68291,
      active: false
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, color: 'black', textAlign: 'center'}}>Select your account and shipto</Text>
      <FlatList
          data={shiptoList}
          extraData={checked}
          renderItem={({item}) =>
              <View style={styles.item}>
                <CheckBox style={{flex: 2}}
                    value={item.active}
                    onValueChange={() => shipToChange(item)}
                />
                <View style={styles.dataView}>
                  <Text style={styles.dataFont}>Ship To: {item.shipto}</Text>
                  <Text style={styles.dataFont}>Account: {item.acct}</Text>
                </View>
              </View>
          }
      />
      {checked && (<TouchableOpacity style={styles.buttonContainer}
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
  headerRight: <View />
};


export default ShipToListScreen;