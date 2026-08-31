import React from "react";

export default function TodoInput() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center my-3">
        <div className="col-12 col-md-5 mb-2 mb-md-0">
          <input type="text" className="form-control" placeholder="Enter Todo Here" />
        </div>
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <input type="date" className="form-control" />
        </div>
        <div className="col-12 col-md-auto">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}