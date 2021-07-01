import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECTS, 
    SELECT_PROJECT,
    DELETE_PROJECT 
} from '../../types'


export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT: 
            return {
                ...state,
                newProjectForm: true
            }
        case GET_PROJECTS: 
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECTS: 
            return {
                ...state,
                projects: [...state.projects, action.payload],
                newProjectForm: false
            }
        case SELECT_PROJECT:
            return {
                ...state,
                projectSelected: state.projects.filter(project => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                projectSelected: null
            }

        default:
            return state;
    }
}