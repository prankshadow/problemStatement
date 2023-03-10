import React from 'react'

const Table = (props) => {
    return (
        <>
            <div className='text-center p-3 pt-4'>
                <h2>TOP 5 SALES</h2>
            </div>
            <div className='px-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sales Id:</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sale Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.postData._id}</td>
                            <td>{props.postData.productName}</td>
                            <td>{props.postData.quantity}</td>
                            <td>{props.postData.amount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table