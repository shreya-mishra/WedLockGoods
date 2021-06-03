import axios from 'axios'
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';
import { User_DETAILS_FAIL, User_DETAILS_REQUEST, USER_DETAILS_RESET, User_DETAILS_SUCCESS, User_LIST_FAIL, User_LIST_REQUEST, User_LIST_SUCCESS, User_LOGIN_FAIL, User_LOGIN_REQUEST, 
User_LOGIN_SUCCESS, USER_LOGOUT, User_REGISTER_FAIL, User_REGISTER_REQUEST, USER_DELETE_SUCCESS,USER_DELETE_REQUEST,USER_DELETE_FAIL,User_REGISTER_SUCCESS, User_UPDATE_PROFILE_FAIL, User_UPDATE_PROFILE_REQUEST, User_UPDATE_PROFILE_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from '../constants/UserConstant'

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
  console.log("in user actions getstate ",getState)
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
        console.log("ur data is " ,data)

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

        const { data } = await axios.put('/api/users/profile',user,
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

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: User_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: User_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: User_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: User_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};