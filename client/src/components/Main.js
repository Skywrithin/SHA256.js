//Main is the wrapper page for all pages
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../logo.svg';

export default function Main() {

    const [userInput, setUserInput] = useState('');

    const inputHandler = (e) => {
        setUserInput((userInput) => e.target.value);
    };

    const buttonClickHandler = (e) => {
        console.log(userInput);
    }


    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Welcome to SHA-256.js, enter your string and press start
                </div>
                <input
                    className="outline outline-1 rounded p-1 m-1"
                    value={userInput}
                    onChange={inputHandler}
                />
                <button
                    className="outline outline-1 rounded p-1 m-1"
                    onClick={buttonClickHandler}
                >
                    Start
                </button>
                <Outlet context={[userInput, setUserInput]} />
            </header>
        </div>
    );
}
