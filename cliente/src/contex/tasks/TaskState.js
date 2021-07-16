import React, {useReducer} from 'react'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'
import {v4 as uuidv4} from 'uuid'
import { 
    GET_TASKS,
    ADD_TASK,
    SHOW_ERROR,
    DELETE_TASK,
    CHANGE_TASK,
    SELECT_TASK,
    EDIT_TASK,
} from '../../types';

const TaskState = (props) => {
    const initialState = {
        tasks: [   
            {id:0, projectId:0, name: 'Elegir Plataforma', state: true},
            {id:1, projectId:0, name: 'Elegir colores', state: false},
            {id:2, projectId:0, name: 'Elegir tecnologias', state: false},
            {id:3, projectId:0, name: 'Elegir hosting', state: true},
            {id:4, projectId:1, name: 'Elegir kivi', state: true},
            {id:5, projectId:1, name: 'Elegir kivi', state: false},
            {id:6, projectId:1, name: 'Elegir kivi', state: false},
            {id:7, projectId:1, name: 'Elegir kivi', state: true},
            {id:8, projectId:2, name: 'Elegir dan', state: true},
            {id:9, projectId:2, name: 'Elegir dan', state: false},
            {id:10, projectId:2, name: 'Elegir dan', state: false},
            {id:11, projectId:2, name: 'Elegir dan', state: true} 
        ],
        tasksProject: null,
        errorTask: false,
        selectedTask: null,
    }


    const [state, dispatch] = useReducer(TaskReducer, initialState);


    const getTasks = projectId => {
        dispatch({
            type: GET_TASKS,
            payload: projectId
        })
    }


    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }


    const showError = (error) => {
        dispatch({
            type: SHOW_ERROR,
            payload: error
        })
    }


    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const changeTaskEstate = (taskId) => {
        dispatch({
            type: CHANGE_TASK,
            payload: taskId
        })
    }


    const selectTask = (task) => {
        dispatch({
            type: SELECT_TASK,
            payload: task
        })
    }

    const editTask = (task) => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }


    return (  
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                showError,
                deleteTask,
                changeTaskEstate,
                selectTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
 
export default TaskState;