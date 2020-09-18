import React from 'react';
import './App.css';

function App() {
  console.log('render');
  return (
    <div className='App'>
      <div className='header'>
        <div style={{ width: '50%' }}></div>
        <div className='header-right'>
          <div className='upcomingStyle'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className='upcoming'>Upcoming</span>
              <div className='dotStyle'></div>
            </div>
            <span>Live consultation</span>
          </div>
          <span>Buy Plans</span>
          <span>View Plans</span>
          <button className='loginButton'>Login</button>
        </div>
      </div>
      <div className='body'>
        <div style={{ fontSize: '1.5rem' }}>Concept Videos</div>
        <div style={{ fontSize: '0.7rem', paddingTop: '1rem' }}>
          Select a number
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '350px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className='left-arrow'>
              <i class='fas fa-angle-left fa-2x'></i>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 8rem'
              }}
            >
              <div className='firstYoutubeBox'>
                <i className='fab fa-youtube fa-2x'></i>
              </div>
              <div className='secondYoutubeBox'>
                <i className='fab fa-youtube fa-2x'></i>
              </div>
              <div className='thirdYoutubeBox'>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                  }}
                >
                  <i className='fab fa-youtube fa-2x'></i>
                </div>
                <div className='youtubeBoxText'>
                  <div>
                    See what <span style={{ color: 'coral' }}>Leena Barua</span>
                    &nbsp; thinks about our plans
                  </div>
                </div>
              </div>
              <div className='fourthYoutubeBox'>
                <i className='fab fa-youtube fa-2x'></i>
              </div>
              <div className='fifthYoutubeBox'>
                <i className='fab fa-youtube fa-2x'></i>
              </div>
            </div>
            <div className='right-arrow'>
              <i class='fas fa-angle-right fa-2x'></i>
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '1.5rem' }}>Live Classes</div>
          <div style={{ fontSize: '0.7rem', paddingTop: '1rem' }}>
            Select a number
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='liveClassesBox'>
            <div className='numberBox'>
              <span className='numberStyle'>5</span>
              <div className='firstBoxLine'></div>
            </div>
            <div className='numberBox'>
              <span className='numberStyle'>6</span>
            </div>
            <div className='numberBox'>
              <span className='numberStyle'>7</span>
            </div>
            <div className='numberBox'>
              <span className='numberStyle'>8</span>
            </div>
            <div className='numberBox'>
              <span className='numberStyle'>9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
