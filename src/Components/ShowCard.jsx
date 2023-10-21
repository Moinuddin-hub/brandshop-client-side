import Card from './Card';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowCard = () => {
    const {brandName}=useParams();

    const Product=useLoaderData();
    const[card,setCard]=useState([]);
  
   
   useEffect(()=>{

    const findCard=Product.filter((item)=>item.brandName.toLowerCase()==brandName.toLowerCase())
    setCard(findCard)

   },[Product,setCard,brandName])
  


 
    return (
        <>
        
       {card.length===0?(<h1>ERROR</h1>):(
           <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
           {
           card.map(data=> <Card key={data._id} data={data} Product={Product}></Card>)
           }
    
         </div>
       )}
     
        </>
    );
};

export default ShowCard;