import React from "react";

export default function TodoItem({ todoName, todoDate }) {
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <h4>{todoName}</h4>
          </div>
          <div className="col-4">
            <h4>{todoDate}</h4>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
