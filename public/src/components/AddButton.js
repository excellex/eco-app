import React from "react";
import CompanyRegistration from "./CompanyRegistration/CompanyRegistration";

function AddButton() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success plus-btn"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Добавить пункт приема
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Введите данные
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CompanyRegistration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButton;
