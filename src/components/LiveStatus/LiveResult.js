import React from "react";

function LiveResult(props) {
  if(props.stateData.ResponseCode !== "200")
  {
    alert("Please Re-check Your Details");
    return false;
  }
  return (

    <div className="container">
      <h5>Current Station</h5>
      <table className="table border">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Station Name[code]</th>
            <th scope="col">Schedule Arrival</th>
            <th scope="col">Actual Arrival</th>
            <th scope="col">Delay</th>
            <th scope="col">Schedule Departure</th>
            <th scope="col">Actual Departure</th>
            <th scope="col">Delay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              {props.stateData.CurrentStation.StationName} [
              {props.stateData.CurrentStation.StationCode} ]
            </td>
            <td>{props.stateData.CurrentStation.ScheduleArrival}</td>
            <td>{props.stateData.CurrentStation.ActualArrival}</td>
            <td>{props.stateData.CurrentStation.DelayInArrival}</td>
            <td>{props.stateData.CurrentStation.ScheduleDeparture}</td>
            <td>{props.stateData.CurrentStation.ActualDeparture}</td>
            <td>{props.stateData.CurrentStation.DelayInDeparture}</td>
          </tr>
        </tbody>
      </table>

      <h5>Train Route</h5>
      <table className="table border">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">Station Name[code]</th>
            <th scope="col">Schedule Arrival</th>
            <th scope="col">Actual Arrival</th>
            <th scope="col">Delay</th>
            <th scope="col">Schedule Departure</th>
            <th scope="col">Actual Departure</th>
            <th scope="col">Delay</th>
          </tr>
        </thead>
        <tbody>
          {props.stateData.TrainRoute.map(function(route, i) {
            return (
              <tr key={i}>
                <th>
                  {route.StationName} [ {route.StationCode} ]
                </th>
                <th>{route.ScheduleArrival}</th>
                <th>{route.ActualArrival}</th>
                <th>{route.DelayInArrival}</th>
                <th>{route.ScheduleDeparture}</th>
                <th>{route.ActualDeparture}</th>
                <th>{route.DelayInDeparture}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LiveResult;
