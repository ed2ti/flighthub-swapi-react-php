import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class StarShips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starships : [],
      pages: 0
    }
    this.page = 1
  }

  async componentDidMount() {
    const getUrl = 'http://localhost:8080/starships/' + this.page
    const result = await axios.get(getUrl);
    this.setState({ starships: result.data.results });
  }

  render() {
    return (
      <div>
        <div class='row'>
          <h2>People List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">model</th>
                <th scope="col">MGLT</th>
                <th scope="col">passengers</th>
                <th scope="col">starship_class</th>
                <th scope="col">hyperdrive_rating</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.starships.map((starship) =>
                  <tr>
                    <td>{starship.name}</td>
                    <td>{starship.model }</td>
                    <td>{starship.MGLT}</td>
                    <td>{starship.passengers}</td>
                    <td>{starship.starship_class}</td>
                    <td>{starship.hyperdrive_rating}</td>
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
