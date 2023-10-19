import { useLoaderData } from "react-router-dom";
import AllCard from "../Page/AllCard";

const MyCard = () => {

const Card=useLoaderData();
console.log(Card)
    return (
        <div>
       
     <div className=" grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
           {
               Card.map(item=><AllCard key={item._id} item={item}></AllCard>)
            }
   </div>

        </div>
    );
};

export default MyCard;