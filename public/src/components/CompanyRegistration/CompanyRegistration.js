import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  fetchAddCompanyAC,
  fetchAddCategoryAC,
  fetchAddMaterialAC,
} from '../../redux/actions';

export default function CompanyRegistration({ data }) {
  const dispatch = useDispatch();
  const [errorState, setErrorState] = useState(false);
  const storeMaterials = useSelector((store) => store.materials);
  const storeCategories = useSelector((store) => store.categories);
  const currentPosition = useSelector(store => store.currentPosition);
  const long = useRef();
  const lat = useRef();
  const address = useRef();
  const metro = useRef();
  const link = useRef();
  const material = useRef();
  const categories = useRef();

  const inputHelper = (event) => {
    event.preventDefault();

    const obj = {
      geometry: [lat.current.value, long.current.value],
      properties: {
        hintContent: metro.current.value,
        balloonContent: address.current.value,
      },
      modules: ['geoObject.addon.hint', 'geoObject.addon.balloon'],
      link: link.current.value,
      materials: [material.current.value],
      categories: [categories.current.value],
    };

    try {
      dispatch(fetchAddCompanyAC(obj)).catch((e) => setErrorState(true));

    } catch (e) {
      setErrorState(true);
    }
  };
  return (
    <div>
      <form onSubmit={inputHelper}>
        <label>Введите широту и долготу</label> <br />
        <input ref={lat} name="lat" type="text" placeholder="широта" defaultValue={currentPosition.latitude} />{' '}
        <input ref={long} name="long" type="text" placeholder="долгота" defaultValue={currentPosition.longitude} />{' '}
        <br />
        <label>Название и территориальное расположение(метро)</label> <br />
        <input ref={metro} name="metro" type="text" /> <br />
        <label>Адрес</label> <br />
        <input
          ref={address}
          name="address"
          type="text"
          placeholder="адрес"
        />{' '}
        <br />
        <label>Ссылка</label> <br />
        <input ref={link} name="link" type="text" placeholder="ссылка" /> <br />
        <label>Выберите материал: </label> <br />
        <select
          ref={material}
          name="material"
          id="material"
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            -- Материал --
          </option>
          {storeMaterials &&
            storeMaterials.map((material) => (
              <option key={uuidv4()} value={material.name}>
                {material.name}
              </option>
            ))}
        </select>
        <select
          ref={categories}
          name="categories"
          id="category"
          defaultValue={'DEFAULT'}
        >
          <option value="DEFAULT" disabled>
            -- Категории --
          </option>
          {storeCategories &&
            storeCategories.map((category) => (
              <option key={uuidv4()} value={category.name}>
                {category.name}
              </option>
            ))}
        </select>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Закрыть
          </button>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
