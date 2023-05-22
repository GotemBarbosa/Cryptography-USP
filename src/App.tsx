
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Header from './components/Header';
import TimelineElement from './components/TimelineElement';
import Background from './components/Background';
import Definitions from './components/Definitions';

import TechBackground from './assets/backgroundCode.jpg'

function App() {


  return (
    <div className='inset-0 z-0 overflow-x-hidden' >
      <Background />
      <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono  bg-slate-900 bg-gradient-to-tr from-cyan-900/50 via-slate-800/10 to-slate-900 ">
        <Header/>
        <div className='w-full h-64 overflow-hidden absolute z-0'>
          <div
            className='absolute bottom-4 w-full h-full bg-center bg-no-repeat'
            style={{
              backgroundImage: `url(${TechBackground})`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        </div>
        <Definitions/>

        <VerticalTimeline 
          lineColor='#14532D'
        >
         <TimelineElement date='2022'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo repellendus illum sunt! Velit quia magni, voluptate mollitia maxime animi sint natus sed illum accusamus! Excepturi incidunt ut maiores aliquam architecto.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit commodi ipsam tempore nostrum, dignissimos iste aspernatur optio quia placeat deleniti ducimus, eius odio magni pariatur reiciendis distinctio quae necessitatibus.
          </TimelineElement>
          <TimelineElement date='2022'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo repellendus illum sunt! Velit quia magni, voluptate mollitia maxime animi sint natus sed illum accusamus! Excepturi incidunt ut maiores aliquam architecto.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit commodi ipsam tempore nostrum, dignissimos iste aspernatur optio quia placeat deleniti ducimus, eius odio magni pariatur reiciendis distinctio quae necessitatibus.
          </TimelineElement>
          <TimelineElement date='2022'>
            <div className='flex justify-center items-center flex-col'>
              <p>
                Olha isso é uma imagem legal nada relacionada a criptografia
              </p>
              <div className='w-60 h-auto'>

              <img src="https://picsum.photos/100"/>
              </div>
            </div>
          </TimelineElement>

        </VerticalTimeline>

        </div>
    </div>
  );
}

export default App;
