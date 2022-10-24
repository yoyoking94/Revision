import React, { useRef, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import './home.css'

function Home() {
    const inputRef = useRef(null);
    const [task, setTask] = useState([]);
    const oldTask = useRef("");
    
    function handleClick(e) {
        e.preventDefault()
        console.log(inputRef.current.value);
        setTask(inputRef.current.value);
        oldTask.current = task;
    }

    function remove(e) {
        e.preventDefault()
    }

    return (
        <div className="home">
            <div className='container'>
                <form className='form'>
                    <label>Task : </label>
                    <input ref={inputRef} type="text" id="message" name="message" />
                    <button onClick={handleClick}>submit</button>
                </form>
            </div>
            <div className='display'>Task : {task} <button onClick={remove}>-</button></div>
            <Navbar />
        </div>
    )
}

export default Home
