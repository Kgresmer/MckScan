import React, {useContext} from "react";
import {BarcodeListContext, PicContext} from "../store";
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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

  const displayEmptyList = (barcodeList) => {
    if (barcodeList && barcodeList.length > 0) {
      return (
        <FlatList
          data={barcodeList}
          renderItem={({item}) =>
            <View style={styles.item}>
              <Text style={styles.qtyFont}>Qty: {item.qty}</Text>
              <Text style={styles.dataFont}>{item.data}</Text>
              <TouchableOpacity style={{flex: 1}}
                                onPress={() => deleteItem(item)}>
                <Text style={styles.removeFont}>Remove</Text>
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
    marginBottom: 5
  },
  qtyFont: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5
  },
  dataFont: {
    flex: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  removeFont: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  }
});


export default ListScreen;