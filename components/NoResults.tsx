import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi'

interface Iprops {
    text: string;
}

const NoResults = ({text}: Iprops) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-8xl'>
    {text === 'No comments yet!'
    ? 
    <BiCommentDetail />
     :
    <MdOutlineVideocamOff />
  }
      </p>
      <p className='text-2xl text-center '>
        {text}
      </p>
    </div>
  )
}

export default NoResults