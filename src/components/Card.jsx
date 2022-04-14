import React, {useEffect, useState} from 'react';


function Card() {
    const [pricing, setPricing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //
        // axios.get(`${BACKEND_URL}/items/Pricing`)
        //     .then(res => {
        //         setPricing(res.data.data)
        //         setIsLoading(false)
        //     })
    // }, []);



    return (
        <div className='card'>

             cool
        </div>
     )
}


export default Card;