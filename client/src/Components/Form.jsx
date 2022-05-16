import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitProduct = (e) => {
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
            <form className={styles.formWrapper} onSubmit={submitProduct}>
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
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form