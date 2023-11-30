import React, { useState } from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const [wisher, setWisher] = useState("");
    const [emptyInput, setEmptyInput] =  useState("")
    const navigate = useNavigate();

    const nameHandler = (e) => {
        e.preventDefault();

        if(wisher == "") {
           setEmptyInput("Enter Wisher name please")
        } else {
           setEmptyInput("")
        navigate(`/animation`, { state: {wisher} })
           
        }

    };

    return (
    <>
        <form onSubmit={nameHandler} className='form-container'>
            <input type='text' placeholder='Enter here the Name' value={wisher} onChange={(e) => setWisher(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <section className='error-container'>
            <p>{emptyInput}</p>
        </section>

    </>
    )
}

export default WelcomePage