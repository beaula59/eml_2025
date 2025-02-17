import React from 'react'
import Wave from './WaveAnimation'
import Card from './Card'

function Home4() {
  return (
    <div className='flex justify-between text-center'>
        <div className='d-flex align-middle'>
            <Wave className="top-0"/>
            <div
                style={{ position: 'relative',
                    fontFamily: "'Merriweather'",
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '63px',
                    color: '#0C223F',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                >
                PAST SPEAKERS
            </div>
            <Card/>
        </div>
        <div className='d-flex align-middle'>
            <div
                style={{ position: 'relative',
                    fontFamily: "'Merriweather'",
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '63px',
                    color: '#0C223F',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                >
                UPCOMING TALKS
            </div>
            <Card/>
            <Wave color="#5373A6" className="bottom-0"/>
        </div>
    </div>
  )
}

export default Home4