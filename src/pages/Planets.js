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
    const getUrl = 'http://localhost:8080/people/' + this.page
    const result = await axios.get(getUrl);
    this.setState({ planets: result.data.results });
  }

  render() {
    return (
      <div>
        <div class='row'>
          <h2>People List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair Color</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
                <th>Birth Year</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.people.map((planet) =>
                  <tr>
                    <td>{planet.name}</td>
                    <td>{planet.height}</td>
                    <td>{planet.mass}</td>
                    <td>{planet.hair_color}</td>
                    <td>{planet.skin_color}</td>
                    <td>{planet.eye_color}</td>
                    <td>{planet.birth_year}</td>
                    <td>{planet.gender}</td>
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
