import * as React from "react";

import { RouteComponentProps, withRouter } from "react-router";
import { ApplicationState } from "../Configs/store";

import { connect } from "react-redux";


class DefaultLayout extends React.Component<any, any> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
   
   // this.getFooterMenu();
   // const { history, location } = this.props;
   // this.updateSEO();
    // history.listen((location: any, action: any) => {
    //   // location is an object like window.location
    //   //action ="PUSH" POP  /route    
    //   if (action == "PUSH") {
    //     let urlInfo = UrlUtils.ParseUrl(location.pathname);
    //     if (!urlInfo.void) {
    //       this.props.newSEO(urlInfo.page, urlInfo.type, 0).then(function (x: any) {
    //         //console.log('asdf',x)
    //         SeoUtils.PushPageInfo(x);
    //       });


    //     }
    //   }
    // });
  }


  componentDidUpdate(prevProps: any, prevState: any) {
    // only update chart if the data has changed
    if (prevProps.loginStatus !== this.props.loginStatus) {
      //console.log('state update componentDidUpdate on layout')
      // console.log('called only');
    }

  }
  render() {
    return (
      <>        
        {this.props.children}      
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  loginStatus: state.loginStatus,
  //cart: state.cart,
  seo: state.seo
});


// export default connect(
//   mapStateToProps,
// )(withRouter<RouteComponentProps<{}>>(DefaultLayout));

export default withRouter(connect(
  mapStateToProps,
  
)(DefaultLayout) as any);