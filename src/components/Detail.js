import React from 'react'
import { useParams } from 'react-router-dom'
import { dataa } from '../Share/ListOfPlayers'


const Detail = () => {
    const userName = useParams();
 const player = dataa.find(obj => {
 return obj.id == userName.id;
 });
 let cost = player.cost.toLocaleString();
  return (
    <div className='container'>
    <div className='product-card'>

    <div className='colR' style={{display:'flex', justifyContent:'space-around'}}>
    <div className='badge'style={{color:'red', fontSize:'4rem',fontWeight:'500'}}>{player.name}</div>
    <div className='product-tumb'>
    <img src={`../${player.img}`} alt=''/>
    </div>
    </div>
    <div className='product-details' style={{padding:'4rem'}}>
    <h4 style={{fontSize:'1.5rem',color:'yellow'}}>{player.club}</h4>
    <div className='product-price' style={{fontWeight:"600"}}>Market value: €
   {cost}</div>
    <p>{player.info}</p>
    <div className='product-bottom-details'></div>
    </div>
    </div>
   </div>
  )
}

export default Detail