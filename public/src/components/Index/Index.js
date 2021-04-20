import React, { useState } from 'react';
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner';
import BarcodeForm from '../BarcodeForm/BarcodeForm';
import AddButton from '../AddButton';
import { Route } from 'react-router-dom';
import { fetchCategoriesAC, fetchAddMaterialAC, fetchMaterialsAC } from '../../redux/actions';
import ReceptionPointsMap from '../ReceptionPointsMap/ReceptionPointsMap';
import { store } from '../../redux/store';
import Select from '../Select/Select';

import { useDispatch, useSelector } from 'react-redux';

import classes from './Index.module.css';
import CompanyRegistration from '../CompanyRegistration/CompanyRegistration';
// import CurrentPosition from '../CurrentPosition/CurrentPosition';

const Index = () => {
  const [data, setData] = React.useState('Scan barcode');
  const [scanned, setScanned] = useState(true);
  const dispatch = useDispatch()
  const success = useSelector(store => store.receptionPoints.success);
  const barcode = useSelector(store => store.barcode.length)

  try {
    dispatch(fetchCategoriesAC());
    dispatch(fetchMaterialsAC());
  } catch (e) {}
  return (
    <div>
      <div className={scanned ? null : classes.false}>
        <BarcodeForm scanned={scanned} setScanned={setScanned} />
        <BarcodeScanner scanned={scanned} setScanned={setScanned} />
      </div>

      {success ? <ReceptionPointsMap /> : null}
      {!success && barcode ? <Select /> : null}
      {/* <CurrentPosition /> */}
    </div>
  );
};

export default Index;
