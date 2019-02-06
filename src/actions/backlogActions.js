import axios from "axios";
import {DELETE_PROJECT, DELETE_PROJECT_TASK, GET_BACKLOG, GET_ERRORS, GET_PROJECT_TASK} from "./types";

export const addProjectTask = (backlog_id, project_task, history) => async dispatch => {
    try {
        await axios.post(`/api/backlog/${backlog_id}/tasks`, project_task);
        history.push(`/projectBoard/${backlog_id}`);
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

export const getBacklog = backlog_id => async dispatch => {
    try {
        const res = await axios.get(`/api/backlog/${backlog_id}/tasks`);

        dispatch ({
            type : GET_BACKLOG,
            payload : res.data
        })
    } catch (e) {
        dispatch ({
            type : GET_ERRORS,
            payload : e.response.data
        })
    }
};

export const getProjectTask = (backlog_id, pt_id, history) => async dispatch => {
  try {
      const res = await axios.get(`/api/backlog/${backlog_id}/tasks/${pt_id}`);
      dispatch ({
          type : GET_PROJECT_TASK,
          payload : res.data
      })
  } catch (e) {
      history.push("/dashboard")
  }
};

export const updateProjectTask = (backlog_id, pt_id, project_task, history) => async dispatch => {
    try {
        await axios.put(`/api/backlog/${backlog_id}/tasks/${pt_id}`, project_task)
        history.push(`/projectBoard/${backlog_id}`);
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

export const deleteProjectTask = (backlog_id, pt_id) =>async  dispatch => {
    try {
        if(window.confirm("Are you sure ? You are deleting task with id " + pt_id + ". This action cannot be undone")) {
            await axios.delete(`/api/backlog/${backlog_id}/tasks/${pt_id}`);
            dispatch ({
                type : DELETE_PROJECT_TASK,
                payload : pt_id
            })
        }

    } catch (e) {
        dispatch ({
            type : GET_ERRORS,
            payload : e.response.data.body
        })
    }
}
