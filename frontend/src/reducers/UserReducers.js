import { USER_LOGOUT, User_LOGIN_FAIL, User_LOGIN_REQUEST, User_LOGIN_SUCCESS,  User_DETAILS_REQUEST, 
User_DETAILS_SUCCESS, User_DETAILS_FAIL, User_REGISTER_REQUEST, User_REGISTER_SUCCESS, User_REGISTER_FAIL, 
User_UPDATE_PROFILE_REQUEST, User_UPDATE_PROFILE_SUCCESS, User_UPDATE_PROFILE_FAIL, User_DELETE_REQUEST, User_DELETE_SUCCESS, 
User_DELETE_FAIL, User_LIST_REQUEST, User_LIST_SUCCESS, User_LIST_FAIL, User_LIST_RESET, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, 
USER_UPDATE_FAIL, USER_UPDATE_RESET, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL, USER_DETAILS_RESET } from "../constants/UserConstant"


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case User_REGISTER_REQUEST:
            return { loading: true  }
        case User_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case User_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case User_LOGIN_REQUEST:
            return { loading: true };
        case User_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case User_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};


export const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case User_DETAILS_REQUEST:
            return { loading: true };
        case User_DETAILS_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case User_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return {user:{}};

        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case User_UPDATE_PROFILE_REQUEST:
            return { loading: true };
        case User_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success:true,userInfo: action.payload };
        case User_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case User_LIST_REQUEST:
      return { loading: true };
    case User_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case User_LIST_FAIL:
      return { loading: false, error: action.payload };
    case User_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return { user: {} };
    default:
      return state;
  }
};