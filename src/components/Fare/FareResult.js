import React from "react";

function FareResult(props) {
  // if(props.stateData.ResponseCode !== "200")
  // {
  //   alert("Please Re-check Your Details");
  //   return false;
  // }
  return (
    <div className="container">
      <table className="table border">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Train Name</th>
            <th scope="col">Source</th>
            <th scope="col">Destination</th>
            <th scope="col">Distance</th>
            <th scope="col">Train Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{props.stateData.TrainName}</td>
            <td>{props.stateData.From}</td>
            <td>{props.stateData.To}</td>
            <td>{props.stateData.Distance}</td>
            <td>{props.stateData.TrainType}</td>
          </tr>
        </tbody>
      </table>

      <table className="table border">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Fare</th>
          </tr>
        </thead>
        <tbody>
          {props.stateData.Fares.map(function(fare, i) {
            return (
              <tr key={i}>
                <th scope="row">1</th>
                <th>{fare.Name}</th>
                <th>{fare.Code}</th>
                <th>{fare.Fare}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FareResult;
