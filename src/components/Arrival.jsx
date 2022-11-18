import React from 'react';
import DataA from './DataArrival';

const Arrival = () => {
  return (
    <>
    <h2 className='arrival'>--------New Arrival---------</h2>

    <div className='main'>
    
    {DataA.map((elem,i) => {
        console.log(elem)
        return (
            
            <div className='arrivalbody'>



            <div className='image'>
            <img height= "200px" width = "260px" src={elem.img} alt="" />
            </div>


            <div className='description'>{elem.des}
            </div>
            <div className='price'>{elem.price}
            </div>

            </div>
            
        )
    })}

    </div>
    </>
  )
}

export default Arrival