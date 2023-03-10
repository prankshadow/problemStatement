import { useState } from 'react'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const login = (event) => {
        event.preventDefault();

        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User login successfully'
                    })
                    localStorage.setItem('authentication', result.data.result.token);
                    localStorage.setItem('user', JSON.stringify(result.data.result.user));
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: result.data.result.user
                    })
                    setLoading(false)
                    navigate('/');
                }
                // setEmail('');
                // setPassword('');
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.error
                })
            })
    }


    return (
        <div className='p-5 pt-4'>
            <form className='loginEntry' onSubmit={(e) => login(e)}>

                <div className='d-flex justify-content-center'>
                    {loading ? <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : ''}
                    <div className='px-2'>
                        <h2 className='text-center'>LOGIN FORM</h2>
                    </div>

                </div>
                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)} />
                </div>
                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Password</label>
                    <input
                        type="password"
                        autoComplete="on"
                        className="form-control"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)} />
                </div>

                <div className="d-grid gap-2 pt-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login