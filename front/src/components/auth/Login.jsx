import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions/index';
import { jwtDecode } from 'jwt-decode';

function Login() {
     const dispatch = useDispatch();
     const authState = useSelector((state) => state.auth);

     const [formData, setFormData] = useState({
          email: '',
          password: '',
     });

     const [decodedToken, setDecodedToken] = useState(null);

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(loginUser(formData));
     };

     const handleLogout = () => {
          dispatch(logoutUser());
     };

     useEffect(() => {
          if (authState.token) {
               const decoded = jwtDecode(authState.token);
               setDecodedToken(decoded);
               console.log(decoded);
          }
     }, [authState.token]);

     return (
          <div>
               {authState.token ? (
                    <div>
                         <p>
                              You are logged in!
                         </p>
                         <pre><code>
                              Token: {JSON.stringify(authState.token, null, 2)}
                         </code></pre>
                         {decodedToken && <pre><code>
                              Decoded Token: {JSON.stringify(decodedToken, null, 2)}
                         </code></pre>}
                         <button onClick={handleLogout}>Logout</button>
                    </div>
               ) : (
                    <form onSubmit={handleSubmit}>
                         <label>
                              Email:
                              <input
                                   type="email"
                                   name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   required
                              />
                         </label>
                         <br />
                         <label>
                              Password:
                              <input
                                   type="password"
                                   name="password"
                                   value={formData.password}
                                   onChange={handleChange}
                                   required
                              />
                         </label>
                         <br />
                         <button type="submit" disabled={authState.loading}>
                              Login
                         </button>
                         {authState.error && <p style={{ color: 'red' }}>{authState.error}</p>}
                    </form>
               )}
          </div>
     );
}

export default Login;

