
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Header from './components/Header';
import TimelineElement from './components/TimelineElement';
import Background from './components/Background';

function App() {


  return (
    <div className='fixed inset-0 z-0'>
      <Background />
      <div className="relative z-10 flex flex-col w-screen h-full min-h-screen font-mono ">
        <Header/>

        <VerticalTimeline 
          className=''
          lineColor='#14532D'
        >
          <TimelineElement date='2022'>
            OLA ISSO É MT LEGAL INFORMAÇÕES MUITO UTEIS
          </TimelineElement>
          <TimelineElement date='2022'>
            OLA ISSO É MT LEGAL INFORMAÇÕES MUITO UTEIS
          </TimelineElement>

        </VerticalTimeline>

        </div>
    </div>
  );
}

export default App;
