import * as React from 'react';
import { Suspense } from 'react';
import { Switch, Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Pages/store';
// import Layout from '../../components/layout/views/DefaultLayout';
// const CoreAdminModule = React.lazy(() => import('../../modules/admin/Index'));
// import PageNotFound from '../../components/static/views/PageNotFound';
//import HomePage from './Modules/HomePage';
const HomePage = React.lazy(() => import('./Modules/HomePage'));
const TestView = React.lazy(() => import('./Modules/Test/TestView'));

const NoLayout = React.lazy(() => import('./../src/Pages/NoLayout'));
import DashBoard from './Modules/Home/DashBoard';
import PageNotFound from './Pages/PageNotFound';
import NavBar from './Modules/Home/NavBar';
// import ContactPage from "../../modules/frontend/contact/contactPage";


interface IDefaultProps {
  component: any,
  layout: any,
  path?: string;
  exact?: boolean;
}
const RouteWithLayout: React.SFC<IDefaultProps> = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;
  return <Route {...rest} render={(matchProps: any) => (
    <Layout>
      <Component {...matchProps} />
    </Layout>
  )} />
}



class App extends React.Component {


  componentDidMount() {

  }
  render() {
    return (<Provider store={store} >

      <Suspense fallback={(<>Loading...</>)}>

        <BrowserRouter>
          <Switch>
            
            <Route  exact  path="/"  component={DashBoard}  /> 
            <RouteWithLayout exact path='/home' component={HomePage} layout={NoLayout} />
            <RouteWithLayout exact path='/test' component={TestView} layout={NoLayout} />
            <Route     path="*"  component={PageNotFound}  /> 

          </Switch>
        </BrowserRouter>

      </Suspense>
    </Provider>
    );
  }

}
export default App;