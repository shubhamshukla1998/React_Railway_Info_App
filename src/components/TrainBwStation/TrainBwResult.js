import React from "react";

function TrainBwResult(props) {
  if(props.stateData.ResponseCode !== "200")
  {
    alert("Please Re-check Your Details");
    return false;
  }
  return (
    <div className="container">
      <h5>Total Trains : {props.stateData.TotalTrains}</h5>

      <table className="table border">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">Train No.</th>
            <th scope="col">Train Name</th>
            <th scope="col">Source</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Destination</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Train Type</th>
          </tr>
        </thead>
        <tbody>
          {props.stateData.Trains.map(function(train, i) {
            return (
              <tr key={i}>
                <th>{train.TrainNo}</th>
                <th>{train.TrainName}</th>
                <th>{train.Source}</th>
                <th>{train.DepartureTime}</th>
                <th>{train.Destination}</th>
                <th>{train.ArrivalTime}</th>
                <th>{train.TrainType}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TrainBwResult;
