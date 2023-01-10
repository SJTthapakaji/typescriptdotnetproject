import { createBrowserHistory } from 'history';
import configureStore from './../Configs/configureStore';
import { ApplicationState } from './../Configs/store/index';
// Create browser history to use in the Redux store
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory();
// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);
export default store;