
import axios from '../axios'

export const fetchDataRequest = ()=>{
    return {
        type:FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess = (data)=>{
    return {
        type:FETCH_DATA_SUCCESS,
        payload:data,
    }
}
export const fetchDataFailure = (error)=>{
    return {
        type:FETCH_DATA_FAILURE,
        payload:error,
    }
}

export const fetchData = ()=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest());
        axios.get('/posts')
        .then((res)=>{
            // const allData = res.data.map((sData)=>{
            //     return{
            //         id:sData.id,
            //         title:sData.title,
            //         content:sData.body,
            //     }
            // })
            dispatch(fetchDataSuccess(res.data))
        })
        .catch((error)=>{
            dispatch(fetchDataFailure(error.message))
        })
    }
}
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';