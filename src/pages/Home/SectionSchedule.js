import React from 'react';
import './SectionSchedule.scss'

function SectionSchedule()
{
    const data = [
        {
            title: 'Data Analysis',
            date:'(19.04-05.05)',
            content: 'Data Analysis Training Day'
        }, {
            title: 'ICM Plan',
            date:'(06.05-13.05)',
            content: 'Lập bảng kế hoạch truyền thông thích hợp'
        },
        {
            title: 'ICM Plan',
            date:'(06.05-13.05)',
            content: 'Lập bảng kế hoạch truyền thông thích hợp'
        }
    ]
    return(
        <section className = "child-section" id="schedule-section">

             <div id="schedule-content">
                 <h5 className="schedule-title">THỂ LỆ VÒNG THI</h5>
                 <div id="schedule-items">
                     <div id="item-container">
                         <div id="vertical-bar"></div>
                        <div className="circle" id="dot-1">
                           <div className="circle-dot"></div>
                        </div>
                        <div className="circle" id="dot-2">
                          <div className="circle-dot"></div>
                        </div>
                        <div className="circle" id="dot-3">
                          <div className="circle-dot"></div>
                        </div>
                     </div>
                    
                    {data.map((item, index) => (
                        <div className="shedule-content-container" id={`content-${index}-container`} key={index}>
                            <div className="shedule-content-text" id={`content-${index}`} key={index}>
                               <h5 style={{color:'#F7D147', marginBottom: '0px'}}>{item.title}</h5>
                               <h5 style={{color:'#F7D147'}}>{item.date}</h5>
                               <h5>{item.content}</h5>
                            </div>
                        </div>
                    ))}
                 </div>
                
             </div>
        </section>
    )
}
export default SectionSchedule