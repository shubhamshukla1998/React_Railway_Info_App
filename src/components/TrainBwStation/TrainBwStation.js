import React from "react";

function TrainBwStation(props) {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Train Between Stations</h1>
      <form id="form" className="bg-light p-5" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>From : </label>
          <div className="inputBlock">
            <input
              type="text"
              style={{ boxShadow: "none" }}
              className="form-control"
              id="from"
              name="from"
              placeholder="Enter Start Station"
              value={props.data.from}
              onChange={props.handleChange}
              required
            />
            <span className="bottom" />
            <span className="right" />
            <span className="top" />
            <span className="left" />
          </div>
          <small className="form-text text-muted">
            Please Enter only station code
          </small>
        </div>
        <div className="form-group">
          <label>To : </label>
          <div className="inputBlock">
            <input
              type="text"
              style={{ boxShadow: "none" }}
              className="form-control"
              id="to"
              name="to"
              placeholder="Enter End Station"
              value={props.data.to}
              onChange={props.handleChange}
              required
            />
            <span className="bottom" />
            <span className="right" />
            <span className="top" />
            <span className="left" />
          </div>
          <small className="form-text text-muted">
            Please Enter only station code
          </small>
        </div>
        <button type="submit" id="find" className="btn btn-primary">
          Find
        </button>
        <a href="/" className="btn btn-primary mx-2">
          Back
        </a>
        {props.data.loading ? (
          <div id="loading">
            <h5 className="loading text-center text-danger">Loading...</h5>
            <div className="dots text-center">
              <div />
              <div />
              <div />
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
      <hr className="style-one" />
      <div id="response" className="p-3" />
    </div>
  );
}

export default TrainBwStation;
