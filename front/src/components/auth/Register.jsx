import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';

function Register() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userState = useSelector((state) => state.user);

     const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
     });

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          await dispatch(createUser(formData));
          if (!userState.error) {
               navigate('/login');
          }
     };

     return (
          <div>
               <h1>Registrar nuevo usuario</h1>
               <p>Usa datos falsos...</p>
               <form onSubmit={handleSubmit}>
                    <label>
                         Username:
                         <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              required
                         />
                    </label>
                    <br />
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
                    <button type="submit" disabled={userState.loading}>
                         Register
                    </button>
                    {userState.error && <p style={{ color: 'red' }}>{userState.error}</p>}
               </form>
          </div>
     );
}

export default Register;
