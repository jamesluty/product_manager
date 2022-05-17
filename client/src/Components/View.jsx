import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import styles from './styles.module.css'

const View = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [id])

    const goToEdit = () => {
        navigate(`/${id}/edit`);
    }

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div className={styles.viewWrapper}>
            <button className={styles.button} onClick={goHome}>Home</button>
            <h2 className={styles.productList}>{product.title}</h2>
            <p><span className={styles.span}>Price: </span>${product.price}</p>
            <p><span className={styles.span}>Description: </span>{product.description}</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={goToEdit}>Edit</button>
                <button className={styles.button} onClick={deleteProduct}>Delete</button>
            </div>
        </div>
    )
}

export default View