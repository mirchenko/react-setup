import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from "../actions/people";
import '../../scss/main.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const { isFetching, data } = this.props.people;

    if(isFetching) {
      return <span>Loading...</span>
    }

    return <div className="container">
      <ul className="people">
        {data.map(item => <li key={item.name}>
          <span>Name: {item.name}</span>
          <span>Height: {item.height}</span>
        </li>)}
      </ul>
    </div>;
  }
}

const mapStateToProps = ({ people }) => ({ people });

export default connect(mapStateToProps, { fetchPeople })(App);