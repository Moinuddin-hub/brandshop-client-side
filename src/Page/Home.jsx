import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import About from '../Components/ExtraSection/About';
import Contact from '../Components/ExtraSection/Contact';
const Home = () => {
    const useCategory=useLoaderData();
    // console.log(useCategory);
    return (
        <>
        <div className='w-[500px] lg:w-[1200px]  mx-auto'>
         
            <Banner></Banner>

            <h2 className="text-4xl font-bold text-center mt-8 mb-8">Our Brand</h2>
        <div className="grid grid-cols-1   lg:grid-cols-3 md:grid-cols-2 mb-4">
        
        {
            useCategory.map(category=><Category key={category.id} category={category}> </Category>)
         }
        </div>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
        </div>
        </>
    );
};

export default Home;