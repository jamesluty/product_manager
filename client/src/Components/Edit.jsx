import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styles from './styles.module.css';
import axios from 'axios'

const Edit = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.product)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const editProduct = (e) => {
        e.preventDefault();
        const updatedProduct = {
            title, 
            price,
            description
        }
        axios.put(`http://localhost:8000/api/products/update/${id}`, updatedProduct)
            .then(() => navigate(`/${id}`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form className={styles.formWrapper} onSubmit={editProduct}>
                <div className={styles.formInputs}>
                    <label>Title</label>
                    <input onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div className={styles.formInputs}>
                    <label>Price</label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price}/>
                </div>
                <div className={styles.formInputs}>
                    <label>Description</label>
                    <input onChange={e => setDescription(e.target.value)} value={description}/>
                </div>
                <button className={styles.button}>Update</button>
            </form>
        </div>
    )
}

export default Edit