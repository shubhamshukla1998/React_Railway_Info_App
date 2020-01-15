import React from "react";
import LiveStatus from "./LiveStatus";
import LiveResult from "./LiveResult";

class LiveStatusContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      trainNo: "",
      startDate: "",
      today: "",
      yesterday: "",
      before_yest: "",
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
    if(this.state.startDate === ""){
      alert("Please Select The Start Date");
      return false;
    }
    let day = this.state.startDate.slice(0, 2);
    let month = this.state.startDate.slice(3, 5);
    let year = this.state.startDate.slice(6);
    let newDate = year + month + day;
    const url = `https://indianrailapi.com/api/v2/livetrainstatus/apikey/b7405bbb65a5f7d6acae218b1fbdbc65/trainnumber/${
      this.state.trainNo
    }/date/${newDate}/`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ respData: data, loading: false });
        if(data.ResponseCode !== "200"){
          alert("Please Re-Check Your Details")
        }
      });

    event.preventDefault();
  }

  componentDidMount() {
    let today = new Date();
    let yesterday = new Date(Date.now() - 864e5);
    let before_yest = new Date(Date.now() - 1728e5);

    this.setState({
      today: this.dateFormatter(today),
      yesterday: this.dateFormatter(yesterday),
      before_yest: this.dateFormatter(before_yest)
    });
  }

  dateFormatter(day) {
    let dd = String(day.getDate()).padStart(2, "0");
    let mm = String(day.getMonth() + 1).padStart(2, "0");
    let yyyy = day.getFullYear();

    return dd + "-" + mm + "-" + yyyy;
  }

  render() {
    let size = Object.keys(this.state.respData).length;
    return (
      <div>
        <LiveStatus
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        {(size !== 0 && this.state.respData.ResponseCode === "200") ? <LiveResult stateData={this.state.respData} /> : ""}
      </div>
    );
  }
}

export default LiveStatusContainer;
