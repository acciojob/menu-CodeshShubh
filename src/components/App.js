import React, { useEffect, useState , useReducer } from 'react'
import './styles.css'
import Menu from './Menu';



const App = () => {

    // const [foods, setfoods] = useState([])


     const reducer=(state , action)=>{
        switch(action.type){
            case "SET_DATA" : 
             return {
                 allFoods:action.payload,
                 filterFoods:action.payload
             }
             case "All" :
                return {...state , filterFoods:state.allFoods}

                case "Breakfast" :
                    return {...state , filterFoods: state.allFoods.filter((items)=>items.category=="Breakfast")}

                    case "Lunch" :
                        return {...state , filterFoods: state.allFoods.filter((items)=>items.category =="Lunch")}

                        case "Shakes":
                            return {...state , filterFoods: state.allFoods.filter((items)=>items.category=="Shakes")}

                            default :
                            return state;
        }
     }


    const initialState = {
      allFoods:[],
      filterFoods:[]
    }

   const[state , dispatch]=useReducer(reducer, initialState)
   const [loading, setloading] = useState(true)



    useEffect(()=>{
        
            setloading(true)
            fetch('../../public/food.json').then((response)=>{
               return response.json()
            }).then((data)=>{
            // setfoods(data)
            dispatch({type:"SET_DATA" , payload:data})
            setloading(false)
            }).catch((error=>{
                setloading(false)
            }))
    },[])
     





  return (
    <div className='headContainer'>
         <div className='heading'>
            <h1>Our Menu</h1>
            <hr/>
         </div>
         <div className='filterbtns'>
              <p onClick={()=>dispatch({type:'All'})} >All</p>
              <p onClick={()=>dispatch({type:'Breakfast'})}>Breakfast</p>
              <p onClick={()=>dispatch({type:'Lunch'})}>Lunch</p>
              <p onClick={()=>dispatch({type:'Shakes'})}>Shakes</p>
         </div>
         <Menu foods={state.filterFoods} loading={loading}/>
    </div>
  )
}

export default App;