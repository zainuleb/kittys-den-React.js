import React, { Component } from 'react';
import './App.css';

//Importing Components
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      doctors: [],
      searchField: '',
    };

    //    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    //Fetch User Data From API
    const doctorsData = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();

    this.setState({ doctors: doctorsData });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, doctors } = this.state;
    const filteredDoctors = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <div className="heading">
          <h1>Kittys Den</h1>
        </div>

        <SearchBox
          placeholder="Search Kittens"
          handleChange={this.handleChange}
        />

        <CardList doctors={filteredDoctors} />
      </div>
    );
  }
}

export default App;
