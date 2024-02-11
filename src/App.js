import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import MainBody from './component/MainBody';
import TodoList from './component/TODO';

//fetchRestroDetails();

const App = ()=>{
    console.log("App Component");
    return(
        <>
        <div className='container'>
            <Header />
            <MainBody />
            {/* <TodoList /> */}
        </div>
        </>
    )
    
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);