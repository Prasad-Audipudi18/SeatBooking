import { Component } from 'react';
import Seat from './Components/Seat';
import {TbArmchair} from 'react-icons/tb'
import './App.css';
let seats=[
  [{id:"A1",isSelected:false,isBooked:true,isPremium:true},
  {id:"A2",isSelected:false,isBooked:false,isPremium:true},
  {id:"A3",isSelected:false,isBooked:false,isPremium:true},
  {id:"A4",isSelected:false,isBooked:false,isPremium:true},
  {id:"A5",isSelected:false,isBooked:false,isPremium:true},
  {id:"A6",isSelected:false,isBooked:false,isPremium:true},
  {id:"A7",isSelected:false,isBooked:false,isPremium:true},
  {id:"A8",isSelected:false,isBooked:false,isPremium:true},
  {id:"A9",isSelected:false,isBooked:false,isPremium:true},
  {id:"A10",isSelected:false,isBooked:false,isPremium:true},],
  [{id:"B1",isSelected:false,isBooked:false,isPremium:true},
  {id:"B2",isSelected:false,isBooked:false,isPremium:true},
  {id:"B3",isSelected:false,isBooked:false,isPremium:true},
  {id:"B4",isSelected:false,isBooked:false,isPremium:true},
  {id:"B5",isSelected:false,isBooked:false,isPremium:true},
  {id:"B6",isSelected:false,isBooked:false,isPremium:true},
  {id:"B7",isSelected:false,isBooked:false,isPremium:true},
  {id:"B8",isSelected:false,isBooked:false,isPremium:true},
  {id:"B9",isSelected:false,isBooked:false,isPremium:true},
  {id:"B10",isSelected:false,isBooked:true,isPremium:true},],
  [{id:"C1",isSelected:false,isBooked:false,isPremium:false},
  {id:"C2",isSelected:false,isBooked:false,isPremium:false},
  {id:"C3",isSelected:false,isBooked:false,isPremium:false},
  {id:"C4",isSelected:false,isBooked:false,isPremium:false},
  {id:"C5",isSelected:false,isBooked:false,isPremium:false},
  {id:"C6",isSelected:false,isBooked:false,isPremium:false},
  {id:"C7",isSelected:false,isBooked:false,isPremium:false},
  {id:"C8",isSelected:false,isBooked:false,isPremium:false},
  {id:"C9",isSelected:false,isBooked:false,isPremium:false},
  {id:"C10",isSelected:false,isBooked:false,isPremium:false},],
  [{id:"D1",isSelected:false,isBooked:false,isPremium:false},
  {id:"D2",isSelected:false,isBooked:false,isPremium:false},
  {id:"D3",isSelected:false,isBooked:false,isPremium:false},
  {id:"D4",isSelected:false,isBooked:true,isPremium:false},
  {id:"D5",isSelected:false,isBooked:true,isPremium:false},
  {id:"D6",isSelected:false,isBooked:false,isPremium:false},
  {id:"D7",isSelected:false,isBooked:false,isPremium:false},
  {id:"D8",isSelected:false,isBooked:false,isPremium:false},
  {id:"D9",isSelected:false,isBooked:false,isPremium:false},
  {id:"D10",isSelected:false,isBooked:false,isPremium:false},],
  [{id:"E1",isSelected:false,isBooked:false,isPremium:false},
  {id:"E2",isSelected:false,isBooked:false,isPremium:false},
  {id:"E3",isSelected:false,isBooked:false,isPremium:false},
  {id:"E4",isSelected:false,isBooked:false,isPremium:false},
  {id:"E5",isSelected:false,isBooked:false,isPremium:false},
  {id:"E6",isSelected:false,isBooked:false,isPremium:false},
  {id:"E7",isSelected:false,isBooked:false,isPremium:false},
  {id:"E8",isSelected:false,isBooked:false,isPremium:false},
  {id:"E9",isSelected:false,isBooked:false,isPremium:false},
  {id:"E10",isSelected:false,isBooked:false,isPremium:false},],
  [{id:"F1",isSelected:false,isBooked:false,isPremium:false},
  {id:"F2",isSelected:false,isBooked:false,isPremium:false},
  {id:"F3",isSelected:false,isBooked:false,isPremium:false},
  {id:"F4",isSelected:false,isBooked:false,isPremium:false},
  {id:"F5",isSelected:false,isBooked:false,isPremium:false},
  {id:"F6",isSelected:false,isBooked:false,isPremium:false},
  {id:"F7",isSelected:false,isBooked:false,isPremium:false},
  {id:"F8",isSelected:false,isBooked:false,isPremium:false},
  {id:"F9",isSelected:false,isBooked:true,isPremium:false},
  {id:"F10",isSelected:false,isBooked:true,isPremium:false},],


  
  
]

class App extends Component{
  state={selectedSeatsIds:[],selectedMovie:"Leo",selectedQuantity:1,seatsData:seats,showProceededData:false}
  
  getSeats=()=>(
      <>
      {seats.map(eachRow=>{
        return (<ul className='row'>
                {eachRow.map(eachSeat=>{
          
          return <Seat key={eachSeat.id} seatDetails={eachSeat} onSeatSelected={this.onSeatSelected}/>
        })}
        </ul>)
      })}
      </>
    )
   
    getModifiedData=(id)=>{
      const{seatsData}=this.state
      const modifiedData=seatsData.map(eachRow=>{
        return(
          eachRow.map(eachSeat=>{
            if (id===eachSeat.id &&eachSeat.isBooked!==true ){
              return({...eachSeat,isSelected:!eachSeat.isSelected})
            }
            else{
              return eachSeat
            }
          })
        )
      })
      
      return modifiedData
    }
    getFilterSelectedSelectionIds=selectedId=>{
      const{selectedSeatsIds}=this.state
      const fileredSelectionIds=selectedSeatsIds.filter(id=>id!==selectedId)
     
      return fileredSelectionIds
      
    }
    onMovieChange=event=>{
      this.setState({selectedMovie:event.target.value})
    }
    onQuantityChange=event=>{
      
      this.setState({selectedQuantity:event.target.value})
      
    }
    modifySelectedIdListWithNewId=id=>{
      const{selectedSeatsIds}=this.state
      const {seatsData}=this.state
      let isBooked=false
      seatsData.forEach(eachRow=>{
        eachRow.forEach(seat=>{
          if(id===seat.id && seat.isBooked===true){
            isBooked=true
          }
        })
      })
      return isBooked?selectedSeatsIds:[...selectedSeatsIds,id]
    }
    onSeatSelected=id=>{
      this.setState(prevState=>{
        const index=prevState.selectedSeatsIds.indexOf(id)
        if(index !==-1){//already present
          const modifiedData=this.getModifiedData(id)
          const filteredSelectedSelectionIds=this.getFilterSelectedSelectionIds(id)
          return({selectedSeatsIds:filteredSelectedSelectionIds,seatsData:modifiedData})
          
        }
        else{//not present
            const selectedSeatStatusModifiedData=this.getModifiedData(id)
            const newlySelectedAddedIdList=this.modifySelectedIdListWithNewId(id)
          return({selectedSeatsIds:newlySelectedAddedIdList,seatsData:selectedSeatStatusModifiedData})
        }
        
      })
    }
    clickOnProceed=()=>{
      this.setState({showProceededData:true})
    }
    onBuyTickets=()=>{
      alert("Tickets were Booked for Movie")
    }
  
  render(){
    const{selectedSeatsIds,seatsData,selectedQuantity,selectedMovie,showProceededData}=this.state
    
    console.log("selected qty",selectedQuantity)
    const disableButtonStatus=selectedQuantity!=selectedSeatsIds.length
    console.log("disabled button status",disableButtonStatus)
    
    return(
      <>
      <h1>Book Your Tickets</h1>
      <div>
      <label htmlFor='Choose Movie'>Select Movie</label>
      <select onChange={this.onMovieChange} name='Choose Movie'>
        
        <option value="leo">Leo</option>
        <option value="salar">Salar</option>
        <option value="jawan">Jawan</option>
        <option value="project k">Project K</option>
      </select>
      </div>
      <div>
      <label htmlFor='quantity'>Select quantity</label>
      <select onChange={this.onQuantityChange} name='quantity'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
      </div>
      <div className='seats'>
        {this.getSeats()}
      </div>
      <div className='screen-container'>
      <div className='screen'>
        
      </div>
      </div>
      <button onClick={this.clickOnProceed} disabled={disableButtonStatus}>Proceed</button>
      {showProceededData && (
        <div>
          <h1>Movie:{selectedMovie}</h1>
          <h3>Quantity:{selectedQuantity}</h3>
          <h5>Price:{150*selectedQuantity}</h5>
          <button onClick={this.onBuyTickets}>Buy Tickets</button>
        </div>
      )}
      </>
    )
  }
  
}

export default App;
