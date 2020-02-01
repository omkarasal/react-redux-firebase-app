import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { Redirect } from 'react-router-dom';
import Loader from '../layout/Loader';

class Dashboard extends Component {
    render(){
        const { projects, auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />

        if(projects){
            return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={projects} />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications notifications={this.props.notifications} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);