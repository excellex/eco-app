import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFindAC } from "../redux/actionCreator";
import { useHistory } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import style from "./FindAdress.module.css";

function FindAdress(props) {
  const dispatch = useDispatch();

  const adress = useSelector((store) => store.adress);
  useEffect(() => {
    dispatch(fetchFindAC(props.props));
  }, []);
  const history = useHistory();
  const mapstate = {
    center: [59.9371, 30.3575],
    zoom: 9,
    width: "90%",
    height: "90%",
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-sm "
        onClick={() => history.push("/blic")}
      >
        Назад
      </button>
      <br />
      Пункты приема.
       <br />
       <div className={style.flexfind}>
        <YMaps>
          <Map state={mapstate}>
            {adress &&
              adress.map((placemark, i) => (
                <Placemark key={placemark._id} {...placemark} />
              ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </div>

  );
}

export default FindAdress;
