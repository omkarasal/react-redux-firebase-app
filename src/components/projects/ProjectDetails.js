import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { deleteProject } from '../../store/actions/projectActions';
import Loader from '../layout/Loader';

class ProjectDetails extends Component {
    handleDelete = () => {
        this.props.deleteProject(this.props.match.params.id);
        this.props.history.push('/');
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render(){
        const { project, auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />

        if(project) {
            return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{ project.title }</span>
                            <p>{ project.content }</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                            <div>{ moment(project.createdAt.toDate()).calendar() }</div>
                        </div>
                    </div>
                    <a className="waves-effect waves-light red btn" onClick={this.handleDelete}>Delete</a>
                    <a className="waves-effect waves-light grey btn" style={{marginLeft: '5px'}} onClick={this.handleBack}>Back</a>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);