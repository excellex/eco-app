import React from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setBarcodeAC } from '../../redux/actions';
import { FaCamera } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './BarcodeScanner.module.css';

const BarcodeScanner = ({ scanned, setScanned }) => {
  const dispatch = useDispatch();
  return (
    <>
        <div onClick={() => setScanned(!scanned)}>
          {scanned ? (
            <div className={classes.barcodeWrapper}>
            <BarcodeScannerComponent
              width={'30%'}
              height={'50%'}
              onUpdate={(err, result) => {
                if (result) {
                  setScanned(false);
                  dispatch(setBarcodeAC(result.text));
                }
              }}
            />
            </div>
          ) : (
            <div>
              <Button
                variant="success"
                onClick={() => setScanned(!scanned)}
                className={scanned ? null : classes.false}
              >
                <FaCamera />
              </Button>{' '}
            </div>
          )}
        </div>
    </>
  );
};

export default BarcodeScanner;
