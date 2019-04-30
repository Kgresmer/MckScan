import React, {useContext} from "react";
import {BarcodeListContext, PicContext} from "../store";
import {FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = () => {
  const [barcodeList, setBarcodeList] = useContext(BarcodeListContext);

  const deleteItem = (item) => {
    const tempArray = [];
    for (let i = 0; i < barcodeList.length; i++) {
      if (barcodeList[i].key !== item.key) {
        tempArray.push(barcodeList[i]);
      }
    }
    setBarcodeList(tempArray);
  };

  const qtyChange = (newQty, item) => {
    const tempArray = [];
    for (let i = 0; i < barcodeList.length; i++) {
      if (barcodeList[i].key === item.key) {
        barcodeList[i].qty = newQty;
      }
      tempArray.push(barcodeList[i]);
    }
    setBarcodeList(tempArray);
  };

  const displayEmptyList = (barcodeList) => {
    if (barcodeList && barcodeList.length > 0) {
      return (
        <FlatList
          data={barcodeList}
          renderItem={({item}) =>
            <View style={styles.item}>
              <Text style={{color: 'white', fontSize: 14}}>Qty</Text>
              <TextInput style={styles.qtyInput}
                         placeholder=""
                         defaultValue={'1'}
                         selectionColor='white'
                         underlineColorAndroid={'transparent'}
                         keyboardType={'numeric'}
                         onChangeText = {(qty)=> qtyChange(qty, item)}
                         value = {''+item.qty}
              />
              <View style={styles.dataView}>
                <Text style={styles.dataFont}>Description: {item.desc.substring(0, 29)}</Text>
                <Text style={styles.dataFont}>UPC: {item.data}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton}
                                onPress={() => deleteItem(item)}>
                <Icon name="close" size={25} color="white" />
              </TouchableOpacity>
            </View>
          }
        />
      )
    } else {
      return (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{fontSize: 20, marginTop: 15}}>There are no items in your scan list. </Text>
          <Text style={{fontSize: 20, marginTop: 15}}>Go back to the scanner and get busy!</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      {displayEmptyList(barcodeList)}
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
  qtyInput: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    height: 50,
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: 'white',
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
  removeButton: {
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


export default ListScreen;