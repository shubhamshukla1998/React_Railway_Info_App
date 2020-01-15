import React from "react";

function Fare(props) {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Check Train Fare</h1>
      <form id="form" className="bg-light p-5" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label >Train Number : </label>
          <div className="inputBlock">
            <input
              type="number"
              style={{ boxShadow: "none" }}
              className="form-control"
              id="train_no"
              name="trainNo"
              placeholder="Enter Train Number"
              value={props.data.trainNo}
              onChange={props.handleChange}
              required
            />
            <span className="bottom" />
            <span className="right" />
            <span className="top" />
            <span className="left" />
          </div>
        </div>
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
        <div className="form-group">
          <label>Quota : </label>
          <select
            name="quota"
            onChange={props.handleChange}
            className="form-control"
            id="quota"
            defaultValue="none"
          >
            <option value="none"  disabled hidden>Select Quota</option>
            <option value="GN">GN</option>
            <option value="CK">CK</option>
          </select>
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

export default Fare;
