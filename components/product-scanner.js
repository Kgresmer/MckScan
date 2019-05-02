
import React, { useContext, useEffect } from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
import {LoadingContext, PicContext, BarcodeListContext } from "../store";
import BarcodeMask from 'react-native-barcode-mask';
const axios = require('axios');


const ProductScanRNCamera = () => {

    this.camera = null;
    this.barcodeCodes = [];
    const [picData, setPicData] = useContext(PicContext);
    const [loading, setLoading] = useContext(LoadingContext);
    const [barcodeList, setBarcodeList] = useContext(BarcodeListContext);
    this.setPictureData = setPicData;

    this.state = {
        camera: {
            type: RNCamera.Constants.Type.back,
            flashMode: RNCamera.Constants.FlashMode.auto,
            barcodeFinderVisible: true
        }
    };

    useEffect(() => {
       const fetchDesc = async () => {
           setLoading('true');
           const scanResult = {...picData, key: picData.data, qty: 1};
           console.log('entering fetch desc function');
           if (barcodeList.length > 0) {
               for (var i = 0; i < barcodeList.length; i++) {
                   console.log('looking for existing keys');
                   if (barcodeList[i].key === scanResult.key) {
                       console.log('found existing key. exit function');
                       return;
                   }
               }
           }

           console.log('making get request');
           axios.get('https://www.barcodelookup.com/'+scanResult.data)
             .then(function (response) {
                 const desc = response.data.substring(response.data.indexOf('<h4>') + 4, response.data.indexOf('</h4>'));

                 if (desc) {
                     scanResult.desc = desc;
                 } else {
                     scanResult.desc = "Unavailable";
                 }
                 console.log('get request returned !!!');
                 if (scanResult.key && scanResult.key.length > 9) {
                     setBarcodeList([...barcodeList, scanResult]);
                 }
             })
             .catch(function (error) {
                 console.log(' Axios request went wrong!!!!! ');
             })
             .then(() => {
                 setLoading('false');
             });
       };

       fetchDesc();
    }, [picData]);

    const onBarCodeRead = (scanResult) => {
        console.warn(scanResult.data);
        if (scanResult.data != null) {
            if (!this.barcodeCodes.includes(scanResult.data)) {
                this.barcodeCodes.push(scanResult.data);
                console.warn('onBarCodeRead call');
            }
            this.setPictureData(scanResult);
        }
    }

    let cameraView;
    if (loading === 'true') {
        cameraView = (
            <View style={styles.loading}>
                <ActivityIndicator size='large' />
            </View>
        )
    } else {
        cameraView = (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    barcodeFinderVisible={this.state.camera.barcodeFinderVisible}
                    barcodeFinderWidth={280}
                    barcodeFinderHeight={220}
                    barcodeFinderBorderColor="white"
                    barcodeFinderBorderWidth={2}
                    defaultTouchToFocus
                    onBarCodeRead={onBarCodeRead.bind(this)}
                    onFocusChanged={() => {}}
                    onZoomChanged={() => {}}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    <BarcodeMask showAnimatedLine={false} />
                </RNCamera>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 14 }}> Move camera to focus on barcode </Text>
                </View>
            </View>
        )
    }

    return (
        <React.Fragment>
            {cameraView}
        </React.Fragment>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProductScanRNCamera;