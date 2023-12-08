import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../components/redux/actions/index';

function Home() {
     const dispatch = useDispatch();
     const authState = useSelector((state) => state.auth);

     const handleLogout = () => {
          dispatch(logoutUser());
     };

     return (
          <div>
               <h1>Welcome to the Home Page</h1>
               <div style={{ textAlign: 'center' }}>
                    {authState.token ? (
                         <div>
                              <p>You are logged in!</p>
                              <button onClick={handleLogout}>Logout</button>
                         </div>
                    ) : (
                         <div>
                              <Link to="/register">
                                   <button>Register</button>
                              </Link>
                              <Link to="/login">
                                   <button>Login</button>
                              </Link>
                         </div>
                    )}
               </div>
          </div>
     )
}

export default Home;