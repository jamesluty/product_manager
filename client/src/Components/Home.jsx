import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    })

    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        console.log(newProduct)
        axios.post("http://localhost:8000/api/products/new", newProduct)
            .then(res => console.log(res))
            .then( () => {
                setTitle("");
                setPrice(0);
                setDescription("");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form className={styles.formWrapper} onSubmit={addProduct}>
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
                <button className={styles.button}>Create</button>
            </form>
            <hr className={styles.line} />
            <div>
                <h1>All Products</h1>
                {products.map((product) => {
                    return <p className={styles.productList} key={product._id}><Link to={`/${product._id}`}>{product.title}</Link></p>
                })}
            </div>
        </div>
    )
}

export default Home