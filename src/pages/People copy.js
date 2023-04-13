import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        this.setState({ tableData: data });
      });
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default People;
