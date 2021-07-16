import { 
    GET_TASKS,
    ADD_TASK,
    SHOW_ERROR, 
    DELETE_TASK,
    CHANGE_TASK,
    SELECT_TASK,
    EDIT_TASK,
} from '../../types';


export default (state, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasksProject: state.tasks.filter( task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case SHOW_ERROR:
            return {
                ...state,
                errorTask: action.payload
            }    
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== action.payload)
            }    
        case CHANGE_TASK:
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload ? ({
                        id: task.id, 
                        projectId: task.projectId,
                        name: task.name,
                        state: !task.state
                    }
                ): task) 
            }
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
            }
        case EDIT_TASK:    
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? action.payload: task),
                selectedTask: null
            }

        default:
            return state;
    }
}