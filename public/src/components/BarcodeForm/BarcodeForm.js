import React, { useEffect, useRef, useState } from 'react';
import { Alert, Form, Col } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { apiPost } from '../../utils/getFunctions';
import { taresURL } from '../../utils/fetchURL';
import classes from './BarcodeForm.module.css';


import { getReceptionPoints } from '../../redux/actionCreator';


const BarcodeForm = ({ scanned, setScanned }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const disptatch = useDispatch();
  const barcode = useSelector(store => store.barcode);
  useEffect(() => {

    setIsEmpty(state => {

      return !state;
    });
    try {
      apiPost(taresURL, { barcode })

        // .then(data => console.log((data)))
        .then(data => disptatch(getReceptionPoints(data)))
        .catch(e => console.error(e.message)); // for not found
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
