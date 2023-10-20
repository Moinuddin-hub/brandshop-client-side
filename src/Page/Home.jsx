import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
    const useCategory=useLoaderData();
    // console.log(useCategory);
    return (
        <>
        <div className='w-[1200px] mx-auto'>
         
            <Banner></Banner>

            <h2 className="text-4xl font-bold text-center mt-8 mb-8">Our Brand</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        
        {
            useCategory.map(category=><Category key={category.id} category={category}> </Category>)
         }
        </div>
        <Footer></Footer>
        </div>
        </>
    );
};

export default Home;