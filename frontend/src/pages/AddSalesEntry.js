import React, { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_BASE_URL } from '../config'

const AddSalesEntry = (props) => {

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "authentication": localStorage.getItem("authentication")
        }
    }

    const addsales = (event) => {
        event.preventDefault();
        const requestData = { productName, quantity, amount }
        axios.post(`${API_BASE_URL}/addsales`, requestData, CONFIG_OBJ)
            .then((result) => {
                if (result.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sales Added Successfully'
                    })
                }
                setProductName('');
                setQuantity('');
                setAmount('');
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: "Some error occurred. Please try again."
                })
            })
    }

    return (
        <div className='p-5 pt-4'>
            <form className='salesEntry' onSubmit={(e) => addsales(e)}>
                <h2 className='text-center'>ADD SALES ENTRY</h2>
                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Product Name</label>
                    <input type="text"
                        className="form-control"
                        value={productName}
                        onChange={(ev) => setProductName(ev.target.value)}

                    />
                </div>
                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Quantity</label>
                    <input type="number"
                        className="form-control"
                        value={quantity}
                        onChange={(ev) => setQuantity(ev.target.value)}
                    />
                </div>
                <div className="mb-2 mt-1">
                    <label className="form-label text-muted">Amount</label>
                    <input type="number"
                        className="form-control"
                        value={amount}
                        onChange={(ev) => setAmount(ev.target.value)}
                    />
                </div>
                <div className="d-grid gap-2 pt-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddSalesEntry