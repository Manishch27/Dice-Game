import React from 'react'
import dices from '../assets/dices.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-around p-12 flex-wrap h-full w-full'>
        <img src={dices} alt="Dices image" className='w-80%'/>
        <div className='flex flex-col items-end gap-16'>
        <h1 className="text-center uppercase font-bold text-8xl">dice game</h1>
        <Link to={'/game'} className='bg-black text-white w-[220px] px-[10px] py-[18px] rounded-[10px] font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out text-center'>Play Now</Link>
        </div>
    </div>
  )
}

export default Home;