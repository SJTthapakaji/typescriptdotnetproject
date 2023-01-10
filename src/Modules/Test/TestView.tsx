import * as React from 'react';
import TestService from './TestService';

export default function TestView() {


     const [datas, setdatas] = React.useState([]);
     const TestFunction = async () => {
          var res = await TestService.GenerateUserLogin();
          if (res != undefined) {
               if (res.Code == 200) {
                    setdatas(res.Data);
               }
          } else {
               alert('undefined')
          }

     }

     const Test2Function = async () => {
          var res = await TestService.GetProgramDetail();
          if (res != undefined) {
               if (res.Code == 200) {
                    setdatas(res.Data);
               }
          } else {
               alert('undefined')
          }

     }

     React.useEffect(() => {
          TestFunction();
          Test2Function();
     }, [])
     return (
          <>
               <div>
                    <h1>Test Component</h1>
               </div>

          </>
     )
}