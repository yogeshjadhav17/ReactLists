import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Actor(props){
  return <li> I like {props.list} </li>;
};

function Bollywood(){


  const actors = ['Shahrukh', 'Ritik', 'Salman', 'Riteish'];

  return(
    <div className="actor">
      <h1> Who is Your favourite Actor in Bollywood?</h1>
      <ul>
        {actors.map((actors) =><Actor list={actors}/>)}
        </ul>
      
    </div>
  );
  
}

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bollywood/>);*/

ReactDOM.render(<Bollywood/>, document.getElementById('root'));