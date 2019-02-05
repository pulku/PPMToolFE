import axios from "axios";
import {GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT} from "./types";

export const createProject = (project, history) => async dispatch => {
    try {
        await axios.post("/api/projects", project);
        history.push("/dashboard");
        dispatch ({
            type : GET_ERRORS,
            payload : {}
        })
    } catch (e) {
        dispatch ({
            type : GET_ERRORS,
            payload : e.response.data
        })
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("/api/projects");
    dispatch ({
        type : GET_PROJECTS,
        payload : res.data
    })
};

export const getProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/projects/${id}`);
        dispatch ({
            type : GET_PROJECT,
            payload : res.data
        });
    } catch (error) {
        history.push("/dashboard")
    }

};

export const updateProject = (id, project, history) => async dispatch => {
    try {
        await axios.put(`/api/projects/${id}`, project);
        history.push("/dashboard");
        dispatch ({
            type : GET_ERRORS,
            payload : {}
        })
    } catch (e) {
        dispatch ({
            type : GET_ERRORS,
            payload : e.response.data.body
        })
    }
};

export const deleteProject = id => async dispatch => {
    try {
        if(window.confirm("Are you sure ? This will delete the project and all the data related to it ")) {
            await axios.delete(`/api/projects/${id}`);
            dispatch ({
                type : DELETE_PROJECT,
                payload : id
            })
        }

    } catch (e) {
        dispatch ({
            type : GET_ERRORS,
            payload : e.response.data.body
        })
    }
};