import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class StarShips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
    }
    this.pages = 0
    this.page = 1
  }

  async componentDidMount() {
    const getUrl = 'http://localhost:8080/people/' + this.page
    const result = await axios.get(getUrl);
    this.setState({ people: result.data.results });
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
                this.state.people.map((person) =>
                  <tr>
                    <td>{person.name}</td>
                    <td>{person.height}</td>
                    <td>{person.mass}</td>
                    <td>{person.hair_color}</td>
                    <td>{person.skin_color}</td>
                    <td>{person.eye_color}</td>
                    <td>{person.birth_year}</td>
                    <td>{person.gender}</td>
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

export default StarShips;
