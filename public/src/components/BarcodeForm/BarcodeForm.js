import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import classes from './BarcodeForm.module.css';
import { fetchAddressesAC } from '../../redux/actions';


const BarcodeForm = () => {
  const disptatch = useDispatch();
  const barcode = useSelector(store => store.barcode);
  useEffect(() => {

    try {
      if (barcode) {
        disptatch(fetchAddressesAC({barcode}))
      }
    } catch (e) {

    }

  }, [barcode]);
  return (
    <>
      <Col md="12">
      <Form>
            <Form.Control
              type="text"
              readOnly
              className={[classes.false, classes.inputForm]}
              value={barcode}
              onChange={null}
            />
          </Form>

      </Col>
    </>
  );
};

export default BarcodeForm;
