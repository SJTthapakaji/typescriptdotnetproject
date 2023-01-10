import { Reducer } from 'redux';
import axios from 'axios';
var jwtDecoder = require('jwt-decode');
import { AppThunkAction } from './../';
import SEOService from './SEOService';
import SeoUtils from '../seoUtils';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface ISEOState {
    seo: ISEO
}
interface ISEO {
    MetaTags: string
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.


interface NewSEOAction { type: 'NEW_SEO' }
interface ClearSEOAction { type: 'CLEAR_SEO' }
interface UpdateSEOAction { type: 'UPDATE_SEO', seo: ISEO }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = NewSEOAction | ClearSEOAction | UpdateSEOAction;


interface ApiResponse {
    access_token?: string;
}

const getSEoData = async (pageName: string, type: string, productId: number) => {
    try {
        let response: any = await SEOService.GetSEOMetaData(pageName, type, productId);
        SeoUtils.PushPageInfo(response.Data);
        return response.Data;
    }
    catch (error) {
        throw error;
    }
}


// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    newSEO: (pageName: string, type: string, productId: number): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        let seo = await getSEoData(pageName, type, productId);
        dispatch({ type: 'UPDATE_SEO', seo: { MetaTags: seo } });
        dispatch({ type: 'NEW_SEO' });

    },
    clearSEO: () => <ClearSEOAction>{ type: 'CLEAR_SEO' }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ISEOState, KnownAction> = (state: ISEOState =
    {
        seo: {
            MetaTags: ""
        }

    }, incomingAction: KnownAction) => {

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'UPDATE_SEO':
            //update     
            return {
                seo: action.seo
            };;

        case 'NEW_SEO':
            //return state
            return {
                seo: state.seo
            };
        case 'CLEAR_SEO':
            state = {
                seo: {
                    MetaTags: ""
                }

            };
            return {
                seo: state.seo
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || {

        seo: {
            MetaTags: ""
        }

    };
};



