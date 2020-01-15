import React from "react";

function LiveStatus(props) {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Live/Running Train Status</h1>
      <form id="form" className="bg-light p-5" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>Train Number : </label>
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
          <label>Start Date : </label>
          <select
            name="startDate"
            onChange={props.handleChange}
            className="form-control"
            id="datePicker"
            defaultValue="none"
          >
            <option value="none" disabled hidden>Select Date</option>
            <option value={props.data.today}>{props.data.today}</option>
            <option value={props.data.yesterday}>{props.data.yesterday}</option>
            <option value={props.data.before_yest}>
              {props.data.before_yest}
            </option>
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

export default LiveStatus;
