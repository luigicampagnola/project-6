import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render(){
      if(this.state.hasError){
        return <h1 className='header-font center f2 f1-l fw2 white-90 mt3 mb5 lh-title'>Ooops.. please make sure it's a .jpg link</h1>
      }
      return this.props.children
  }
}


export default ErrorBoundry;