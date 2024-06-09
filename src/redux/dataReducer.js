import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./dataActions";

const initialState = {
    data:[],
    isLoading:false,
    error:null,
}

const dataReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null,
            };
        case FETCH_DATA_SUCCESS: 
             return{
                ...state,
                isLoading:false,
                data:action.payload,
                error:null
             };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }

            default:
                return state;

    }
}

export const DATA = (state)=>state.data;
export const IS_LOADING = (state)=>state.isLoading;
export const ERROR = (state)=>state.error;

export default dataReducer