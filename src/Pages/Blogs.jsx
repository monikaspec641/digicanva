import React from 'react';

const Blogs = () => {
  return (
    <div name='Blogs' className='w-full h-screen bg-[#060933] text-white'>
    <div className='flex flex-col justify-center items-center w-full h-screen '>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#FF00FF]'>
            Blogs
          </p>
        </div>
        <div className="text-right"></div> {/* Add text-right class here */}
      </div>
      <div>
        <div className='w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className="text-right"> {/* Add text-right class here */}
            <input
              className="border-2 border-[#FF00FF] rounded-lg p-2.5 text-white bg-transparent focus:outline-none focus:shadow-outline-purple focus:border-[#FF00FF]"
              type="text"
              placeholder="Search Blog..."
            />
          </div>
          <div className="flex flex-row space-x-4">
            {/* Card 1 */}
            
                {/* Card content goes here */}
                <div className="card" style={{ width: "200px", height: "254px", borderRadius: "20px", padding: "5px", boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px", backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)" }}>
                  <div className="card__content" style={{ background: "rgb(5, 6, 45)", borderRadius: "17px", width: "100%", height: "100%" }}>
                    {/* Card content goes here */}
                  </div>
                </div>
             
            {/* Card 2 */}
            <div className="card" style={{ width: "200px", height: "254px", borderRadius: "20px", padding: "5px", boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px", backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)" }}>
                  <div className="card__content" style={{ background: "rgb(5, 6, 45)", borderRadius: "17px", width: "100%", height: "100%" }}>
                    {/* Card content goes here */}
                  </div>
                </div>
            {/* Card 3 */}
            <div className="card" style={{ width: "200px", height: "254px", borderRadius: "20px", padding: "5px", boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px", backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)" }}>
                  <div className="card__content" style={{ background: "rgb(5, 6, 45)", borderRadius: "17px", width: "100%", height: "100%" }}>
                    {/* Card content goes here */}
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Blogs;
