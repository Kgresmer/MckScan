import React, { useState } from 'react';

export const PicContext = React.createContext('picture');
export const LoadingContext = React.createContext('loading');
export const BarcodeListContext = React.createContext('barcodes');
export const SelectedShipToContext = React.createContext('shipTo');
export const ShipToListContext = React.createContext('shipToList');

const Store = ({children}) => {

    const [barcodeList, setBarcodeList] = useState([]);
    const [picData, setPicData] = useState({});
    const [loading, setLoading] = useState('false');
    const [selectedShipTo, setShipTo] = useState({});
    const [shipToList, setShipToList] = useState(shiptoList);

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            <BarcodeListContext.Provider value={[barcodeList, setBarcodeList]}>
            <PicContext.Provider value={[picData, setPicData]}>
            <SelectedShipToContext.Provider value={[selectedShipTo, setShipTo]}>
            <ShipToListContext.Provider value={[shipToList, setShipToList]}>
                {children}
            </ShipToListContext.Provider>
            </SelectedShipToContext.Provider>
            </PicContext.Provider>
            </BarcodeListContext.Provider>
        </LoadingContext.Provider>
    )
};

const shiptoList = [
  {
    key: '1',
    shipto: 54556632,
    acct: 54464432,
    active: false
  },
  {
    key: '2',
    shipto: 14516632,
    acct: 14464432,
    active: false
  },
  {
    key: '3',
    shipto: 24556632,
    acct: 34464432,
    active: false
  },
  {
    key: '4',
    shipto: 61884,
    acct: 225472,
    active: false
  },
  {
    key: '5',
    shipto: 3211144,
    acct: 1113253,
    active: false
  },
  {
    key: '6',
    shipto: 68181,
    acct: 68291,
    active: false
  }
];

export default Store;