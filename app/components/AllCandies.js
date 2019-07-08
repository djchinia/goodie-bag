import React, { Component } from 'react';
import Candy from './Candy';
import { connect } from 'http2';

export class AllCandies extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        {this.props.allCandies.map(candy => (
          <Candy key={candy.id} candy={candy} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCandies: state.allCandies,
  };
};

const mapDispatchToProps = state => {
  return {
    // it returns an object that dispatches the function getAllCandies
    getAllCandies: () => dispatch(getAllCandies()),
  };
};

// THUNK
export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
