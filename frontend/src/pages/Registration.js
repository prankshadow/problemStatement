import axios from 'axios';
import React, { useState } from 'react'
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';

const Registration = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    const signup = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { fullName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setFullName('');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);

                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later'
                })
            })
    }

    return (
        <div className='p-5 pt-4'>
            <form className='registrationEntry' onSubmit={(e) => signup(e)}>

                <div className='d-flex justify-content-center'>
                    {loading ? <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : ''}
                    <div className='px-2'>
                        <h2 className='text-center'>REGISTRATION FORM</h2>
                    </div>
                </div>

                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Full Name</label>
                    <input type="text" 
                    className="form-control" 
                    value={fullName} 
                    onChange={(ev) => setFullName(ev.target.value)} />
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

export default Registration