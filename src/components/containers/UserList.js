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
        <div>
          <h1>UserList</h1>
          <input
            type="button"
            value="Load Users"
            onClick={this.props.actions.userActions.getUsers}
          />
          {this.props.users.map(user => (
            <div
              key={user.id}
              onClick={() => {
                this.props.actions.userActions.getPosts(user.id);
              }}
            >
              {user.id} - {user.name}
            </div>
          ))}
        </div>
        <div>
          <h2>Posts</h2>
          {this.props.posts.map(post => (
            <div id={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    posts: state.posts
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
