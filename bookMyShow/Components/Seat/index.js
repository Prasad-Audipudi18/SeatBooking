import {PiArmchairBold} from 'react-icons/pi'
import "./index.css"
const Seat=(props)=>{
    const {seatDetails,onSeatSelected}=props
    const{id,isBooked,isPremium,isSelected}=seatDetails
    
    const classForSeatStatus=isBooked?"booked-seat":""
    const classForSeatType=isPremium?"premium-seat":"non-premium-seat"

    
    const onSeatSelection=()=>{

        onSeatSelected(id)
        
    }
    return(
        <li onClick={onSeatSelection} className={`${classForSeatStatus} ${classForSeatType} ${""}`} key={id}><PiArmchairBold/></li>
    
    )
    

}
export default Seat