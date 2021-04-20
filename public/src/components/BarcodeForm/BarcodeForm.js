import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import classes from './BarcodeForm.module.css';
import { fetchAddressesAC, setReceptionPointsAC } from '../../redux/actions';


const BarcodeForm = ({ scanned, setScanned }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const disptatch = useDispatch();
  const barcode = useSelector(store => store.barcode);
  useEffect(() => {

    setIsEmpty(state => {

      return !state;
    });
    try {
      if (barcode) {
        disptatch(fetchAddressesAC({barcode}))
      }
    } catch (e) {

    }

  }, [barcode]);
  const formValue = useRef();
  return (
    <>
      <Col md="12">

        {isEmpty ? (
          <Form>
            <Form.Control
              type="text"
              readOnly
              onChange={null}
            />
          </Form>
        ) : (
          <Form>
            <Form.Control
              ref={formValue}
              type="number"
              value={barcode}
              readOnly
              onChange={null}
              className={[scanned ? null : classes.false, classes.inputForm]}
            />
          </Form>
        )}
      </Col>
    </>
  );
};

export default BarcodeForm;
