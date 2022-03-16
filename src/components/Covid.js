import React, { useEffect, useState } from 'react'
import './Covid.css' ;


const Covid = () => {

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData =  await res.json()
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        } catch(e) {
            console.log(e)
        }
        
    }

    useEffect(() => {
        getCovidData();
    }, []);

  return(
    <>
    <body>
        <h1 className='main'>⭕ LIVE</h1> 
        <h2 className='main-1'>COVID-19 CORONAVIRUS TRACKER</h2>

        <div className='flex-container'>

            <div className='card-1'>

                <h1 className='card-name'><span className='small-name'>OUR</span>COUNTRY</h1>
                <h2 className='card-total'>INDIA</h2>

            </div>
            <div className='card-2'>

            <h1 className='card-name'><span className='small-name'>TOTAL</span>RECOVERD</h1>
                <p className='card-total'>{data.recovered}</p>    

            </div>
            <div className='card-3'>

            <h1 className='card-name'><span className='small-name'>TOTAL</span>CONFIRMED</h1>
                <p className='card-total'>{data.confirmed}</p>

            </div>


        </div>

        <div className='flex-container'>

            <div className='card-1'>

                <h1 className='card-name'><span className='small-name'>TOTAL</span>DEATH</h1>
                <p className='card-total'>{data.deaths}</p>

            </div>
            <div className='card-2'>

            <h1 className='card-name'><span className='small-name'>TOTAL</span>ACTIVE</h1>
                <p className='card-total'>{data.active}</p>    

            </div>
            <div className='card-3'>

            <h1 className='card-name'><span className='small-name'>LAST</span>UPDATED</h1>
                <p className='card-total'>{data.lastupdatedtime}</p>

            </div>


        </div>
    </body>
    </>
  ) 
}

export default Covid