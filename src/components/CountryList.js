import React, { Component } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";

class CountryList extends Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((rsp) => {
      this.setState({
        countries: rsp.data.slice(0, 20),
      });
    });
  }

  searchHandler = (e) => {
    axios.get('https://restcountries.eu/rest/v2/name/'+e.target.value).then(res=>{
      this.setState({
        countries:res.data
      })
    })
  };

  render() {
    const countryList = this.state.countries.map((ct) => {
      return <CountryCard country={ct} key={ct.numericCode} />;
    });
    return (
      <div>
        <input
          type="text"
          name="search"
          className="form-control mb-3"
          onChange={this.searchHandler}
          placeholder="Ülke Adı Giriniz"
        ></input>
        <div className="card-columns">{countryList}</div>
      </div>
    );
  }
}

export default CountryList;
