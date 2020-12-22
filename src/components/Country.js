import React, { Component } from "react";
import axios from "axios";
class Country extends Component {
  state = {
    country: {},
  };

  componentDidMount() {
    let name = this.props.match.params.name;
    console.log(name);
    axios
      .get("https://restcountries.eu/rest/v2/name/" + name + "?fullText=true")
      .then((rsp) => {
        this.setState({
          country: rsp.data[0],
        });
      });
  }

  render() {
    const { country } = this.state;
    return (
      <div>
        <h2>{country.nativeName}</h2>
        <br />
        <div className="card-columns">
          <div className="card">
            <div className="card-body">
              <dl className="row">
                <dt className="col-sm-4">Başkent:</dt>
                <dd className="col-sm-8">{country.capital}</dd>

                <dt className="col-sm-4">Nüfus:</dt>
                <dd className="col-sm-8">{country.population}</dd>

                <dt className="col-sm-4">Alan:</dt>
                <dd className="col-sm-8">{country.area}</dd>
              </dl>
            </div>
          </div>
          <div className="card">
            <img src={country.flag} className="card-img-top" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Country;
