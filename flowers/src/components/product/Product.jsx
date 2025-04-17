import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/cartSlice'

function Product( { data } ) {
    const dispath = useDispatch()
  return (
    <div className='product'>
        <div className="product-card">
            <div className="pro-img">
                <img src={data.imageUrl} />
            </div>
            <button className='pro-btn' onClick={ () => dispath( addCart(data) )}> add to card </button>
            <div className="pro-title">
                <h6> { data.title } </h6>
            </div>
            <div className="pro-text">
                <h4> $ {data.price}  </h4>
            </div>
        </div>
    </div>
  )
}

export default Product
