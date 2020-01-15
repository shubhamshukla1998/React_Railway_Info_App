import React from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

function Home() {
  return (
    <div className="container my-3">
      <h1 className="text-center display-3">Indian Rail Information</h1>
      <h4 className="text-muted text-center">Realtime, Simple & Fast</h4>
      <div className="row my-4">
        <div className="col-lg-4 col-sm-12 p-3">
          <div
            className="card text-center p-2"
            style={{ width: "auto", overflow: "hidden" }}
          >
            <img
              id="image1"
              src={image1}
              className=" image card-img-top rounded mx-auto d-block img-fluid"
              alt="train"
              style={{ width: "auto", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Live/Running Train Status</h5>
              <p className="card-text">Track any train easily</p>
              <a href="/LiveStatus" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 p-3">
          <div
            className="card text-center p-2"
            style={{ width: "auto", overflow: "hidden" }}
          >
            <img
              src={image2}
              className=" image card-img-top rounded mx-auto d-block img-fluid"
              alt="train"
              style={{ width: "auto", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Train Fare</h5>
              <p className="card-text">Check Train Fares in just one click!</p>
              <a href="/Fare" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 p-3">
          <div
            className="card text-center p-2"
            style={{ width: "auto", overflow: "hidden" }}
          >
            <img
              src={image3}
              className=" image card-img-top rounded mx-auto d-block img-fluid"
              alt="train"
              style={{ width: "auto", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Train Between Stations</h5>
              <p className="card-text">Find out All trains between stations</p>
              <a href="/TrainBwStation" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
