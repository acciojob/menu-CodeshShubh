import React from 'react'

const Menu = ({foods ,loading}) => {
    if(loading)
        return <h1>Loading...</h1>
  return (
    <div className='foodContainer'>
        <div className='CardContainer'>
             {
                foods.map((items)=>{
                    return(
            <div key={items.id} className='card'>
                 <div className='imgC'>
                    <img src={items.image} alt='img'/>
                 </div>

                  <div className='textArea'>
                      <div className='upper_text'>
                        <p>{items.name}</p>
                        <p>${items.price}</p>
                        
                      </div>
                      <hr/>
                      <div className='description'>
                         <p>{items.description}</p>
                      </div>
                  </div>

             </div>
                    )
                })
             }
        </div>
    </div>
  )
}

export default Menu