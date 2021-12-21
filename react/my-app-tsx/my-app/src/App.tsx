import React from 'react';
import './App.css';
import ButtonStyles from './Button.module.css';
import CanvasSize from './Canvas.module.css';

type Text = {
  text: string,
}


const TextButton = (props: Text) => {
  return <button className={ButtonStyles.Backstyle}> {props.text} </button>
};



function App() {
  return (
    <div className="App">
        <header className="App-Header">
          <div className={ButtonStyles.ToolBar}>
            <div className={ButtonStyles.SideButtons}>
              <TextButton text='1' />
              <TextButton text='2' />
              <TextButton text='3' />
            </div>
            <div className={ButtonStyles.SideButtons}>
              <TextButton text='1' />
              <TextButton text='22' />
              <TextButton text='3' />
            </div>
          </div>
        </header>
        <div className="App-Body">
          <div className= {CanvasSize.CanvasSize}></div>
        </div>
      </div>
  )
}

export default App;
