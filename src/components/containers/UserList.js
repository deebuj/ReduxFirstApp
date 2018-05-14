import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/UserActions";
import * as types from "../../actions/ActionTypes";

class UserList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>UserList</h1>
        <input
          type="button"
          value="Load Users"
          onClick={this.props.actions.userActions.getUsers}
        />
        {this.props.users.map(user => <div>{user.name}</div>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userActions: bindActionCreators(userActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
