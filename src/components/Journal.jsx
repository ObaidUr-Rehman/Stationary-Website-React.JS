import React from 'react';
import Data from './DataJournal';



const Journal = () => {
  return (
    <>
    <h2 className='journal'>--------Journals---------</h2>

    <div style={{background:"lightblue"}}className='main'>
    
    {Data.map((elem,i) => {
        console.log(elem)
        return (
            
            <div className='journalbody'>

            <img height= "200px" width = "260px" src={elem.img} alt="" />
           

            <p className='description'>{elem.des}
            </p>
            <p className='price'>{elem.price}
            </p>

            </div>
            
        )
    })}
    
    </div>
    </>
  )
}

export default Journal;