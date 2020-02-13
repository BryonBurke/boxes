import React from 'react';




function Header() {
  const gridthing = {
    display:'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '10px',
  }

const backstyle ={
  backgroundColor: 'lightblue',
  height: '200px',
  padding: '20px'
}




  return (

    <div>


    <div style = {gridthing}>
    <p style = {backstyle}> some stuff </p>
    <p style = {backstyle}> some other stuff </p>

    </div>




    </div>



);
}

export default Header;
