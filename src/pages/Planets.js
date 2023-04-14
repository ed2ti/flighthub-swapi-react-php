import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class Planets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [],
    }
    this.pages = 0
    this.page = 1
  }

  async componentDidMount() {
    const getUrl = 'http://localhost:8080/planets/' + this.page
    const result = await axios.get(getUrl);
    this.setState({ planets: result.data.results });
    this.setState({ pages: result.data.pages });
  }

  render() {
    return (
      <div>
        <div class='row'>
          <h2>Planets List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">climate</th>
                <th scope="col">diameter</th>
                <th scope="col">gravity</th>
                <th scope="col">population</th>
                <th scope="col">rotation period</th>
                <th scope="col">surface water</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.planets.map((planet) =>
                  <tr>
                    <td>{planet.name}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.population}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.surface_water}</td>
                  </tr>
                )
              }

            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Planets;
