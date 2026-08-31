import React from "react";

export default function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container text-center">
      <div className="row align-items-center my-2 p-2 border rounded">
        <div className="col-6 col-md-4">
          <h4>{todoName}</h4>
        </div>
        <div className="col-4 col-md-3">
          <h4>{todoDate}</h4>
        </div>
        <div className="col-2 col-md-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}