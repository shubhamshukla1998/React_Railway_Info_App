import React from "react";
import TrainBwStation from "./TrainBwStation";
import TrainBwResult from "./TrainBwResult";

class TrainBwStationCont extends React.Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
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
    const url = `https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/b7405bbb65a5f7d6acae218b1fbdbc65/From/${
      this.state.from
    }/To/${this.state.to}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ respData: data , loading:false });
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
        <TrainBwStation
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        {(size !== 0 && this.state.respData.ResponseCode === "200") ?  <TrainBwResult stateData={this.state.respData} /> : ""}
      </div>
    );
  }
}

export default TrainBwStationCont;
