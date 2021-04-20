import React, { useEffect, useState } from 'react';
import style from './Select.module.css';
import { materialsURL, addTareURL } from '../../utils/fetchURL';
import { apiPost } from '../../utils/fetches';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/store';
import { addBarcodeAC, addTareAC } from '../../redux/actions';

export default function Select() {
  const dispatch = useDispatch();
  const data = useSelector(store => store.barcode);
  const materials = useSelector(store => store.materials);
  const categories = useSelector(store => store.categories);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errorState, setErrorState] = useState(false);

  const selectedMaterialHandler = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const selectedCategoryHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const clickHandler = () => {
    if (selectedMaterial && selectedCategory) {
      const body = {
        barcode: data,
        material: selectedMaterial,
        category: selectedCategory,
      };

      try {
        dispatch(addTareAC(body))
        // apiPost(addTareURL, body).catch(e => e);
      } catch (e) {
        setErrorState(true);
      }
    }
  };

  return (
    <div>
      <div>
        <select
          name="material"
          id={style.material}
          onChange={selectedMaterialHandler}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            -- Материал --
          </option>
          {materials &&
          materials.map((material) => (
            <option key={material._id} value={material._id}>
              {material.name}
            </option>
          ))}
        </select>
        <select
          name="category"
          id={style.category}
          onChange={selectedCategoryHandler}
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            -- Категория --
          </option>
          {categories &&
          categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button
        type="button"
        className="btn btn-success"
        onClick={clickHandler}
        style={{ marginBottom: '10px' }}
      >
        Добавить
      </button>
    </div>
  );
}
