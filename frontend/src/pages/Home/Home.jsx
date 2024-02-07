import React from 'react'
import image from '../../assets/banner-removebg-preview.png'
import ban from '../../assets/undraw_shopping_app_flsj.svg'
import chat from '../../assets/chat.svg'
import post from '../../assets/post.svg'
import items from '../../assets/items.svg'
import price from '../../assets/price.svg'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='ml-20 p-10'>
      <div className='rounded-xl rounded-br-[80px] md:px-9 md:py-2 px-4 py-9  bg-gradient-to-r from-sky-300 to-teal-400'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10  '>
          {/* box image */}
          <div>
            <img src={ban} className='h-[400px] w-[400px]' alt="" />
          </div>
          {/* box content */}
          <div className='md:w-4/5'>
            <h2 className='md:text-5xl text-4xl text-white mb-6 leading-relaxed font-bold'>VIT-BAZAAR <span className='md:text-3xl text-white font-bold'>Where College Finds Commerce!</span>
            </h2>
            <p className='text-xl mt-10 mb-8  text-gray-50  '>"Experience the power of collective buying at VIT-BAZAAR - where students unite<br/> for unbeatable deals! Connect with your mates, save big, and make <br/>your college life even more affordable!"</p>
            <div>
              <button className=' mt-5 py-4 px-8 bg-teal-500 hover:bg-blue-600 text-white text-bold rounded-lg transition-all duration-300'>Get Started for Free</button>
            </div>
          </div>
          
        </div>
      </div>

    {/* Roadmap */}
      <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
      
    {/* Cards */}
    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start md:gap-14 gap-8'>
    <div className='bg-[rgba(255,255,255,0.04) rounded-[35px] h-[430px] w-4/4 shadow-lg cursor-pointer  shadow-cyan-500/50 
    hover:translate-y-4 transition-all duration-300'>
      <div>
        <img src={items}></img>
        <h5 className='text-xl font-semibold text-primary mt-5 px-5 text-center'>Find Your Spare Items</h5>
        <p className='text-secondary mt-3 px-3'> Passing out from college and want to get rid of your items
                  like bicycle,stationary etc.Have some spare stationary and
                  books.</p>
      </div>
      </div>  
    <div className='bg-[rgba(255,255,255,0.04) rounded-[35px] h-[350px] w-4/4 shadow-lg cursor-pointer md:mt-20  shadow-cyan-500/50 
    hover:translate-y-4 transition-all duration-300'>
      <div>
        <img src={post}></img>
        <h5 className='text-xl font-semibold text-primary mt-5 px-5 text-center'>Post On The Site Hassle Free</h5>
        <p className='text-secondary mt-3 px-3'> Collect all the basic details of the item that you want to
                    sell and fill in the same on the webpage with ease.</p>
      </div>
      </div>  
    <div className='bg-[rgba(255,255,255,0.04) rounded-[35px] h-[500px] w-4/4 shadow-lg cursor-pointer  shadow-cyan-500/50 
    hover:translate-y-4 transition-all duration-300'>
      <div>
        <img src={chat}></img>
        <h5 className='text-xl font-semibold text-primary mt-5 px-5 text-center'>Chat With the Buyer with full Privacy</h5>
        <p className='text-secondary mt-3 px-3'> Clear all the doubts by directly chattting with the buyer.
                    All this without worrying about giving away any personal
                    number as we have our chat feature built into the web app
                    itself.</p>
      </div>
      </div>  
    <div className='bg-[rgba(255,255,255,0.04) rounded-[35px] h-[400px] w-4/4 shadow-lg cursor-pointer md:mt-20  shadow-cyan-500/50 
    hover:translate-y-4 transition-all duration-300'>
      <div>
        <img src={price}></img>
        <h5 className='text-xl font-semibold text-primary mt-5 px-5 text-center'>Get the best price for your item</h5>
        <p className='text-secondary mt-3 px-3'> Show off your negotation skills and finalise the best deal
                    avialable to you. Do all this Stress Free as we allow only
                    your college mates to join this site.</p>
      </div>
      </div>  
    </div>  
    
      </div>
      </div>
      
      {/* Footer */}

    <Footer/>
    </div>
  )
}

export default Home