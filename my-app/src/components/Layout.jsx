import React from 'react';
import Header from './Header';
function Layout() {
  return (
    <div> {/* Parent div so I return only one element*/}
      <Header/>
        <main className ="pt-40"> 
          <div className="max-w-screen-xl w-11/12 mx-auto bg-[#17171A]">  
            <div className="w-full flex justify-center items center flex-col">
              <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto bg-[#1F1F23] flex flex-col justify-center items-center p-4 m-6 h-auto custom-shadow-green">
                <h3 className="font-bold">Fishing Gallery</h3>
                <img src="/main_fish.jpg" alt="fish picture" className="w-[90%] md:w-[80%] lg:w-[76%] pt-4 mt-4 rounded-md"/>
                <button className="p-4 m-6 bg-[#489C24]">More</button>
              </div>
              <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto bg-[#1F1F23] flex justify-center items-center p-4 m-6 h-72 custom-shadow-green">
                <h3 className="font-bold">Content</h3>
              </div>
              <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto bg-[#1F1F23] flex justify-center items-center p-4 m-6 h-72 custom-shadow-green">
                <h3 className="font-bold">Content</h3>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
export default Layout;