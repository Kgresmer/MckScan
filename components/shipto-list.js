import React from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CheckBox} from "react-native-elements";

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const ShipToListScreen: NavStatelessComponent = ({ navigation }) => {

  const shipToChange = (item) => {
    for (let i = 0; i < shiptoList.length; i++) {
      if (shiptoList[i].key === item.key) {
        shiptoList[i].active = true;
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
      <Text>Select your account and shipto</Text>
      <FlatList
          data={shiptoList}
          renderItem={({item}) =>
              <View style={styles.item}>
                <CheckBox
                    checked={item.active}
                    onPress={() => shipToChange(item)}
                />
                <View style={styles.dataView}>
                  <Text style={styles.dataFont}>Ship To: {item.shipto}</Text>
                  <Text style={styles.dataFont}>Account: {item.acct}</Text>
                </View>
              </View>
          }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3185cd',
    padding: 5,
    marginTop: 5
  },
  dataView: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});

ShipToListScreen.navigationOptions = {
  title: 'Where to?',
  headerRight: <View />
};


export default ShipToListScreen;