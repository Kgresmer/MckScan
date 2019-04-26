import React, {useContext} from "react";
import {BarcodeListContext, PicContext} from "../store";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListScreen = () => {
    const [barcodeList, setBarcodeList] = useContext(BarcodeListContext);

    const deleteItem = (item) => {
        for( let i = 0; i < barcodeList.length; i++){
            if ( barcodeList[i].key === item.key) {
                setBarcodeList(barcodeList.splice(i, 1));
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(barcodeList)}</Text>
            <FlatList
                data={barcodeList}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Text style={styles.fontStyles}>Qty: 3</Text>
                        <Text style={styles.fontStyles}>{item.data}</Text>
                        <TouchableOpacity style={{flex: 1}}
                         onPress={(item) => deleteItem(item)}>
                            <Text style={styles.fontStyles}>Remove</Text>
                        </TouchableOpacity>
                    </View>}
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
        marginBottom: 5
    },
    fontStyles: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    }
});


export default ListScreen;