import React, { useState } from 'react';

export const PicContext = React.createContext('picture');
export const LoadingContext = React.createContext('loading');
export const BarcodeListContext = React.createContext('barcodes');

const Store = ({children}) => {

    const [barcodeList, setBarcodeList] = useState([]);
    const [picData, setPicData] = useState({});
    const [loading, setLoading] = useState('false');

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            <BarcodeListContext.Provider value={[barcodeList, setBarcodeList]}>
            <PicContext.Provider value={[picData, setPicData]}>
                {children}
            </PicContext.Provider>
            </BarcodeListContext.Provider>
        </LoadingContext.Provider>
    )
};

export default Store;