import React from 'react';

// Our Function to return HOC
// const withData = (WrappedComponent, dataSource) => {
const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }

    // Using with props makes it clearer when mounting the component in the App
    componentDidMount() {
      fetch(this.props.dataSource)
        .then(response => response.json())
        .then(data => this.setState({ data: data.slice(0, 4) }));
    }

    // Includin a Loading, in case it takes to long to load.
    render() {
      const {dataSource, ...otherProps} = this.props;
      return this.state.data.length < 1 ? (
        <h1>Loading</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} /> )
    }
  }
  return WithData;
}

export default withData;