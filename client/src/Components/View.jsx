import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'

const View = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    })

    return (
        <div className={styles.viewWrapper}>
            <h2 className={styles.productList}>{product.title}</h2>
            <p><span className={styles.span}>Price: </span>${product.price}</p>
            <p><span className={styles.span}>Description: </span>{product.description}</p>
        </div>
    )
}

export default View