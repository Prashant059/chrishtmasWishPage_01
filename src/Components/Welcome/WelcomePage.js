import React, { useState } from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom';
// import video from '../../Assets/alone-house-in-forest.960x540.mp4'


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
        <> <div className='video-background'>
            {/* <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <form onSubmit={nameHandler} className='form-container'>
                <input type='text' placeholder='Enter here the Name' value={wisher} onChange={(e) => setWisher(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <section className='error-container'>
                <p>{emptyInput}</p>
            </section>
        </div>
        </>
    )
}

export default WelcomePage