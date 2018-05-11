import React from "react";

class MyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div>{this.props.data1}</div>
        <div>My component</div>
      </div>
    );
  }
}

export default MyComponent;
