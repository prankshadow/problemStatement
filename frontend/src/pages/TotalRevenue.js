import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config'
import Swal from 'sweetalert2';
import TotalFormat from './TotalRevenueFormat';

const TotalRevenue = () => {
  // const CONFIG_OBJ = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "authentication": localStorage.getItem("authentication")
  //   }
  // }

  // const [allData, setAllData] = useState([]);

  // const getAllData = async () => {
  //   const response = await axios.get(`${API_BASE_URL}/totalrevenue`, CONFIG_OBJ)
  //   setAllData(response.data)

  //   console.log();
  //   useEffect(() => {
  //     getAllData();
  //     // eslint-disable-next-line
  //   }, []);

  //   return (
  //     <>
  //       {/* <input value={allData} onChange={(ev) => setAllData(ev.target.value)} /> */}
  //       <h2>TODAY'S TOTAL REVENUE IS </h2>
  //     </>
  //   )
  // }


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
          <>
            <TotalFormat postData={post} key={i} />
          </>
        )
      })}

    </>
  )









}

export default TotalRevenue