import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'; 

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render () {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to="/" />
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="card white">
                    <div className="card-content">
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <input type="email" id="email" onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                            <div className="red-text center">
                                { authError ? <p>{ authError }</p> : null }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);