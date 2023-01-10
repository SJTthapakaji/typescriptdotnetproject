import { Reducer } from 'redux';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { AppThunkAction } from './../';
// import {ILoginStatusState} from './state/state';
import { NEW_LOGIN, CLEAR_LOGIN, UPDATE_LOGIN } from './constants/constants';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface ILoginStatusState {
    status: IUserStatus
}
interface IUserStatus {
    isLoggedIn: boolean,
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
    picture: string,
    roles: string[],
    identityUserId: number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.


interface NewLoginAction { type: 'NEW_LOGIN',status: IUserStatus }
interface ClearLoginAction { type: 'CLEAR_LOGIN' }
interface UpdateLoginAction { type: 'UPDATE_LOGIN', status: IUserStatus }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = NewLoginAction | ClearLoginAction | UpdateLoginAction;


interface ApiResponse {
    access_token?: string;
}

const getToken = async () => {
    try {
        const res = await axios.get(`/t/g`);
        const response = await res.data;
        localStorage.setItem('token', JSON.stringify(response));
        return response.access_token;

    }
    catch (error) {
        throw error;
    }
}
const getUserInfo = async () => {
    try {

        let token = JSON.parse(localStorage.getItem('token')||"{}").access_token;        
        if (token == null || token == '' || token == undefined) {
            //first case
            token = await getToken();

        } else {
            let decodedToken:any = jwt_decode(token);
            if(decodedToken.IdUid==undefined){
                token = await getToken();

            }
            if (Date.now() >= decodedToken.exp * 1000) {
                token = await getToken();

            }
        }

        let decodedToken:any = jwt_decode(token);        
        return {
            isLoggedIn: decodedToken.sub ? decodedToken.sub > 0 : false,
            identityUserId: decodedToken.IdUid ? decodedToken.IdUid : 0,
            userName: decodedToken.name ? decodedToken.name : "",
            email: decodedToken.email ? decodedToken.email : "",
            firstName: decodedToken.name ? decodedToken.name : "",
            lastName: decodedToken.surname ? decodedToken.surname : "",
            picture: decodedToken.picture ? decodedToken.picture : "",
            roles: decodedToken.roles ? decodedToken.roles : []
        };
    }
    catch (error) {
        throw error;
    }
}

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    newLogin: (): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let userInfo = await getUserInfo();
        dispatch({ type: 'UPDATE_LOGIN', status: userInfo });
        dispatch({ type: 'NEW_LOGIN', status: userInfo });

    },
    clearLogin: () => <ClearLoginAction>{ type: 'CLEAR_LOGIN' }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ILoginStatusState, KnownAction> = (state: ILoginStatusState =
    {
        status: {
            isLoggedIn: false,
            userName: "",
            email: "",
            firstName: "",
            lastName: "",
            picture: "",
            roles: [],
            identityUserId: 0
        }

    }, incomingAction: KnownAction) => {

    const action = incomingAction as KnownAction;
    switch (action.type) {

        case UPDATE_LOGIN:
            //update     
            return {
                status: action.status
            };

        case NEW_LOGIN:
            //return state
            return {
                status: action.status
            };
        case CLEAR_LOGIN:
            state = {
                status: {
                    isLoggedIn: false,
                    userName: "",
                    email: "",
                    firstName: "",
                    lastName: "",
                    picture: "",
                    roles: [],
                    identityUserId: 0
                }

            };
            return {
                status: state.status
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || {
        status: {
            isLoggedIn: false,
            userName: "",
            email: "",
            firstName: "",
            lastName: "",
            picture: "",
            roles: [],
            identityUserId: 0
        }

    };
};

