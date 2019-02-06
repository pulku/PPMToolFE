import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import {getBacklog} from "../../actions/backlogActions";
import PropTypes from "prop-types";

class ProjectBoard extends Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors : nextProps.errors});
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }

    render() {

        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        const {errors} = this.state;

        let BoardContent;

        const boardAlgo = (errors, project_tasks) => {
            if (project_tasks.length < 1) {
                if (errors.errorMessage) {
                    return (<div className="alert alert-danger text-center" role="alert">{errors.errorMessage}</div>);
                } else {
                    return (<div className="alert alert-warning text-center" role="alert">No project task found</div>);

                }
            } else {
                return (<Backlog project_tasks_prop={project_tasks}/>);
            }
        };

        BoardContent = boardAlgo(errors, project_tasks);

        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br/>
                <hr/>
                {BoardContent}

            </div>

        );
    }
}

ProjectBoard.propTpes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
});

export default connect(mapStateToProps, {getBacklog})(ProjectBoard);