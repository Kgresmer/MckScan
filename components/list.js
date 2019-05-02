import React, {useContext} from "react";
import {BarcodeListContext, PicContext} from "../store";
import {FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface NavStatelessComponent extends React.StatelessComponent {
  navigationOptions?: Object
}

const ListScreen: NavStatelessComponent = ({navigation}) => {
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
        <View style={styles.container}>
          <View style={{flex: 6}}>
          <FlatList
            data={barcodeList}
            renderItem={({item}) =>
              <View style={{flexDirection: "column", backgroundColor: '#3185cd', marginTop: 5, marginHorizontal: 5}}>
                <View style={{flexDirection: 'row', flexShrink: 1, flex: 1, paddingLeft: 25, paddingTop: 10}}>
                  <Text style={styles.dataFont}>UPC: </Text>
                  <Text style={styles.dataFont}>{item.data}</Text>
                </View>
                <View style={styles.item}>

                  <View style={{flexDirection: 'column', flex: 3}}>
                    <Text style={styles.dataFont}>Qty</Text>
                    <TextInput style={styles.qtyInput}
                               placeholder=""
                               defaultValue={'1'}
                               selectionColor='white'
                               underlineColorAndroid={'white'}
                               keyboardType={'numeric'}
                               onChangeText={(qty) => qtyChange(qty, item)}
                               value={'' + item.qty}
                    />
                  </View>

                  <View style={{flexDirection: 'column', flexShrink: 1, flex: 7}}>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold',}}>Description</Text>
                    <Text style={styles.dataDesc}>{item.desc}</Text>
                  </View>

                  <View style={{flexDirection: 'column', flex: 2, padding: 10}}>
                    <TouchableOpacity style={styles.removeButton}
                                      onPress={() => deleteItem(item)}>
                      <Icon style={styles.removeFont} name="close" size={25} color="white"/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }
          />
          </View>
          <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => navigation.navigate('submit')}>
            <Text style={styles.buttonText}>Ready to Submit</Text>
          </TouchableOpacity>
        </View>
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
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 110
  },
  qtyInput: {
    flex: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    height: 30,
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  dataView: {
    flex: 5,
    flexDirection: 'row',
    alignContent: 'center',
    height: 40,
  },
  dataFont: {
    textAlign: 'center',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 0
  },
  dataDesc: {
    alignSelf: 'center',
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 14,
    paddingBottom: 10
  },
  removeButton: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: 'red',
    marginHorizontal: 10
  },
  buttonContainer: {
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

ListScreen.navigationOptions = {
  title: 'Item List',
  headerRight: <View/>
};


export default ListScreen;