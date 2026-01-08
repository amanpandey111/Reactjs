import React from 'react'
import Card from './Card'

function MyCards() {
  return (
    <div className='border-2 w-120 text-white' >
      <Card>
        <div className='flex flex-col gap-3' >
          <Card.Header>
            <h1 className='text-lg font-bold text-center' >Explore The Universe</h1>
          </Card.Header>
          <Card.Body>
            <div className='flex gap-10 items-center' >
              <Card.Image src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_1280.jpg" className='h-25 w-25 rounded-full' />
              <div>
                <h1 className='text-lg font-bold' >Cosmic Journey</h1>
                <p>Discover The WOnder Beyond Our Planet. Unnavel the Mysteries of galaxies far away</p>
                <div>
                  <button>Learn More</button>
                  <button>Share</button>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <p className='text-center' >Adventure Awaits</p>
          </Card.Footer>
        </div>
      </Card>
    </div>
  )
}

export default MyCards