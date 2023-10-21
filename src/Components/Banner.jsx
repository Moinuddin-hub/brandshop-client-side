

const Banner = () => {
    return (
        <div className="w-96 mt-8 ml-4 lg:w-full md:w-1/2">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/drrgM5n/banner.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
     <div className="max-w-lg">
      <h1 className="mb-5 ml-20 lg:text-3xl font-bold flex">Welcome to Technology</h1>
      <p className="mb-5 font-bold">Electrical and electronics engineering is a branch of engineering that deals with the practical applications of electricity in all its forms. It encompasses both electrical engineering,
       which focuses on large-scale production of electricity, and electronics engineering,</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;