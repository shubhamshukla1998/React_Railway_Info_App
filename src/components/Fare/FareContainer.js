import React from "react";
import Fare from "./Fare";
import FareResult from "./FareResult";

class FareContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      trainNo: "",
      from: "",
      to: "",
      quota: "",
      loading: false,
      respData: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.setState({ loading: true });
    if(this.state.quota === ""){
      alert("Please Select The Quota");
      return false;
    }
    const url = `https://indianrailapi.com/api/v2/TrainFare/apikey/b7405bbb65a5f7d6acae218b1fbdbc65/TrainNumber/${
      this.state.trainNo
    }/From/${this.state.from}/To/${this.state.to}/Quota/${this.state.quota}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ respData: data , loading:false});
        if(data.ResponseCode !== "200"){
          alert("Please Re-Check Your Details")
        }
      });

    event.preventDefault();
  }

  render() {
    let size = Object.keys(this.state.respData).length;
    return (
      <div>
        <Fare
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        {(size !== 0 && this.state.respData.ResponseCode === "200") ? <FareResult stateData={this.state.respData} /> : ""}
      </div>
    );
  }
}

export default FareContainer;
