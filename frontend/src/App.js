import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { signout } from './actions/userAction';
import DashboardScreen from './screens/DashboardScreen';
import SigninScreen from './screens/SigninScreen';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">System Specs</Link>
            </div>
            <div>
                {
                  userInfo ? (
                    <div className="dropdown">
                      <Link to="#">{userInfo ? userInfo["user"].fullName : "Sign in"} <i className="fa fa-caret-down"></i> </Link>
                      <ul className="dropdown-content">
                        <Link to="#signout" onClick={signoutHandler}> Sign Out</Link>
                      </ul>
                    </div>
                  ) :
                  (
                    <Link to="/signin">Sign in</Link>
                  )
                }
                
            </div>
        </header>
        <main>
          <Route path='/dashboard' component={DashboardScreen}></Route>
          <Route exact path='/' component={SigninScreen}></Route>
        </main>
        <footer>
            <p className="row center">All rights reserved</p>
        </footer>
    </div>
    </BrowserRouter>  
  );
}

export default App;
