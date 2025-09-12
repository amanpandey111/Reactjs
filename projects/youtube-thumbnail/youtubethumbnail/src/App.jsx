import './App.css'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { useState } from 'react';
import getYouTubeID from 'get-youtube-id';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const urlModel = [
    {
      width:120,
      height:90,
      url:'https://img.youtube.com/vi/[video-id]/default.jpg',
      filename:'default.jpg'
    },
    {
      width:320,
      height:180,
      url:'https://img.youtube.com/vi/[video-id]/default.jpg',
      filename:'default.jpg'
    },
    {
      width:480,
      height:360,
      url:'https://img.youtube.com/vi/[video-id]/default.jpg',
      filename:'default.jpg'
    },
    {
      width:120,
      height:90,
      url:'https://img.youtube.com/vi/[video-id]/default.jpg',
      filename:'default.jpg'
    },
    {
      width:1280,
      height:720,
      url:'https://img.youtube.com/vi/[video-id]/default.jpg',
      filename:'default.jpg'
    }
  ]

  const[url, setUrl] = useState('')

  function fetchThumbnail(e){
    e.preventDefault()
    const videoId = getYouTubeID(url)
    if(videoId){
      toast.success('Valid Youtube URL')
    }else{
      toast.error('Invalid Youtube URL')
    }
  }

  return (
    <div className='border-1 border-red-500 min-h-screen bg-gray-200 py-8' >

      <div className='text-center'>
        <h1 className='text-4xl font-bold ' >Youtube Thumbnail Download</h1>
        <form className='space-x-4 mt-6' onSubmit={fetchThumbnail} >
          <input type="url"
          className='bg-white p-3 rounded-lg w-[450px]'
          required
          placeholder='Enter Youtube Video URL'
          onChange={(e)=>setUrl(e.target.value)}
          />
          <button className='cursor-pointer p-3 rounded-lg bg-indigo-600 text-white font-medium' >
            <i className="ri-download-line mr-1"></i>Download
          </button>
        </form>
      </div>

      <div className='mt-12 grid grid-cols-3 gap-12 w-10/12 mx-auto' >
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
        <div className='bg-white rounded-lg p-16' >

        </div>
      </div>

      <ToastContainer position='bottom-left' />
    </div>
  )
}

export default App
