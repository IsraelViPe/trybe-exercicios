import React from "react";

class UserProfile extends React.Component {
    render() {
        const {id,name,email,avatar} = this.props.user
        return <div>
            <p>{name} como o e-mail {email} </p>
            <img src={avatar} alt="avatar" />
        </div> 
    }
}

export default UserProfile;