import React,{Component} from 'react'

class ProjectItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">REACT</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>Spring / React Project</h3>
                            <p>Project to create a Kanban Board with Spring Boot and React</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <span><i className="fas fa-chalkboard"> Project Board </i></span>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update">
                                        <span><i className="fas fa-edit"> Update Project Info</i></span>
                                    </li>
                                </a>
                                <a href="">
                                    <li className="list-group-item delete">
                                        <span><i className="fas fa-minus-circle"> Delete Project</i></span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;