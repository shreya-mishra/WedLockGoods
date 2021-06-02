import axios from 'axios'
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';
import { User_DETAILS_FAIL, User_DETAILS_REQUEST, USER_DETAILS_RESET, User_DETAILS_SUCCESS, User_LOGIN_FAIL, User_LOGIN_REQUEST, 
User_LOGIN_SUCCESS, USER_LOGOUT, User_REGISTER_FAIL, User_REGISTER_REQUEST, User_REGISTER_SUCCESS, User_UPDATE_PROFILE_FAIL, User_UPDATE_PROFILE_REQUEST, User_UPDATE_PROFILE_SUCCESS } from '../constants/UserConstant'

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: User_REGISTER_REQUEST })


        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post('api/users',
            { name,email, password },
            config
        );

        dispatch({
            type: User_REGISTER_SUCCESS,
            payload: data
        })
         dispatch({
            type: User_LOGIN_SUCCESS,
            payload: data
        })
                localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: User_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: ORDER_LIST_MY_RESET });

};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: User_LOGIN_REQUEST,
        });

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "api/users/login",
            { email, password },
            config
        );

        dispatch({
            type: User_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: User_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getUserDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({ type: User_DETAILS_REQUEST })
        const {userLogin:{userInfo}} = getState()

        const config = {
            headers: {
                 Authorization:`Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(`/api/users/${id}`,
            config
        );

        dispatch({
            type: User_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: User_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}


export const updateUserProfile = (user) => async (dispatch,getState) => {
    try {
        dispatch({ type: User_UPDATE_PROFILE_REQUEST })
        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                 Authorization:`Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.putt('/api/users/profile',user,
            config
        );

          dispatch({
      type: User_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
 
    localStorage.setItem("userInfo", JSON.stringify(data));
  }catch (error) {
        dispatch({
            type: User_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}