import React from 'react';
import NavBar from "../components/NavBar";
import '../styles.css';

export default function FakePage (){
    return (
        <div className='page'>
                <NavBar />  {/*nav-bar must be first to ensure other content is in the center */}
            <div className='content'>  {/*add div to classify what content you will add next, like main contents */}
                <p>fake page</p>
            </div>
            
        </div>
    )
}