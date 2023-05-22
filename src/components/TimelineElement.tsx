import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

type TimelineProps = {
    children: string | JSX.Element | JSX.Element[],
    date: string
}

export default function TimelineElement({children, date}:TimelineProps){
    return(
        <VerticalTimelineElement 
          contentStyle={{
            background: 'rgba(15, 23, 42)', 
            color:"#fff",
            border:'none',
            boxShadow: 'none',
            zIndex:3,
          }}
          contentArrowStyle={{
            borderRight: 'none',
            zIndex:3,
          }}
          date= {date}
          iconStyle={{
            boxShadow: '0 0 0 3px #047857',
            background: '#065F46',
            zIndex:3,
          }}
        >
          {children}
        </VerticalTimelineElement>
    )
}
