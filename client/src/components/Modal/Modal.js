import React from "react";
import "./modal.css"

function Modal(props){
    return(
        <div className={`${props.Modal} modal `} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
           <div className="modal-body">
              <p>{props.alert}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal