import Card from './Card';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MyCard from './MyCard';
const ShowCard = () => {
    const {brandName}=useParams();

    const Product=useLoaderData();
    const[card,setCard]=useState([]);
  
   useEffect(()=>{

    const findCard=Product.filter((item)=>item.brandName.toLowerCase()==brandName.toLowerCase())
    setCard(findCard)

    console.log(typeof brandName);
    console.log(typeof Product[0].brandName);
   },[Product,setCard,brandName])


 
    return (
        <>
        <div className='grid grid-cols-3'>
          {
          card.map(data=> <Card key={data._id} data={data} Product={Product}></Card>)
          }
   
        </div>
     
        </>
    );
};

export default ShowCard;