import React, {useContext} from "react";
import {BarcodeListContext, PicContext} from "../store";
import {  StyleSheet, Text, View } from 'react-native';

const DisplayRecentPic = () => {
    const [picData, setPicData] = useContext(PicContext);

    return (
        <View>
            <Text>{picData ? 'Most Recent scan: ' + JSON.stringify(picData.data) : "No Data!"}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    }
});

export default DisplayRecentPic;