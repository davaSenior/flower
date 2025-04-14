import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import Product from '../product/Product'
const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"

function Home() {

  const [ product, setProduct ] = useState( [] )

  async function getPro() {
    try {
      const res = await axios.get(API )
      setProduct( res.data )
      // console.log( res );
    } catch (error) {
      console.log (error );
    }
  }

  useEffect( () => {
    getPro()
  }, [] )

  return (
    <div className='container'>
      <div className="flower">
        {
          product.slice( 0, 8 ).map( (item) => (
            <Product key={item.id} data={item} />
       ) ) 
        }
      </div>
    </div>
  )
}

export default Home
