import { useEffect, useState } from 'react';
import Table from '../components/Table'
import axios from 'axios';
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';

const Top5Sales = () => {

    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "authentication": localStorage.getItem("authentication")
        }
    }

    const [allData, setAllData] = useState([]);

    const getAllData = async () => {
        const response = await axios.get(`${API_BASE_URL}/totalrevenue`, CONFIG_OBJ)

        if (response.status === 200) {
            setAllData(response.data)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Some error ocurred in top5sales'
            })
        }
    }
    useEffect(() => {
        getAllData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {allData.map((post, i) => {
                return (
                    <Table postData={post} key={i}/>
                )
            })}

        </>
    )
}

export default Top5Sales