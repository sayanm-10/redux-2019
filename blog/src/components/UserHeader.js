import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

/*
 * ownProps provides access to the components props object
 */
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
