import React, { useEffect } from 'react';
import { useState } from 'react';
import diceImages from '../images';
import image from "../assets/dice_1.png";

const Game = () => {
    const arr = [1, 2, 3, 4, 5, 6];

    const [selectedBtn, setSelectedBtn] = useState(null);

    const [dice, setDice] = useState(diceImages[0]);

    const [totalScore, setTotalScore] = useState(0);

    const [text, setText] = useState('');

    const [showRules, setShowRules] = useState(false);

    const numberSelected = (e)=>{
        setSelectedBtn(parseInt(e.target.textContent));
    }

    const randomDice = ()=>{

        if(selectedBtn != null){
            let random = Math.floor(Math.random() * 6);
            setDice(diceImages[random]);
        }

        else if(selectedBtn === null){
            setText('You have not selected any number');
        }
    }

    useEffect(() => {
        if(selectedBtn === dice.diceNumber){
            setTotalScore(prev=>prev+selectedBtn);
        }

        else if(selectedBtn != dice.diceNumber && selectedBtn!=null){
            setTotalScore(prev=>prev-2);
        }

    }, [dice])

  return (
    <>
    <div className='flex justify-around py-8'>
        <div>
            <h1 className='text-8xl font-medium text-center'>{totalScore}</h1>
            <p className='text-2xl'>Total Score</p>
        </div>

        <div className='flex flex-col items-end gap-4 font-bold'>
            {
            selectedBtn===null&&  <p className='text-2xl font-normal text-[#FF0C0C]'>{text}</p>}
            <div>
            {
            arr.map((item, i) =>{
                return <button key={i} className= {selectedBtn!=item?'w-[72px] h-[72px] border-2 border-black mr-4': 'w-[72px] h-[72px] border-2 border-black mr-4 bg-black text-white'} onClick={(e)=>numberSelected(e)}>{item}</button>
            })}
            </div>
            <div>
            <p className='text-2xl'>Select Number</p>
            </div>
        </div>

    </div>

    <div className='flex flex-col  items-center gap-8'>
        <img src={dice.url} alt="" srcset="" className='w-[250px]' onClick={()=> randomDice()}/>
        <h2 className='text-[24px] font-medium'>Click on Dice to roll</h2>
        <button className='border-2 border-black px-[18px] py-[10px] rounded-md w-56 h-11' onClick={()=>setTotalScore(0)}>Reset Score</button>
        <button className='border-2 border-black px-[18px] py-[10px] rounded-md w-56 h-11 bg-black text-white' onClick={()=>setShowRules(prev=>!prev)}>{showRules?'Hide Rules':'Show Rules'}</button>
    </div>

    {showRules &&
    <div className='flex justify-center'>
    <div className='max-w-4xl h-52 bg-[#FBF1F1] p-5 text-left my-24 font-medium'>
        <h2 className='text-2xl font-bold pb-5'>How to play dice game</h2>
        <div className='flex flex-col gap-1'>
        <p className='text-base'>Select any number</p>
        <p className='text-base'>Click on dice image</p>
        <p className='text-base'>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
    </div>

    </div>
}

    </>

  )
}

export default Game;