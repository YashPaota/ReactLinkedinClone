// import React from 'react';
// import "./Widget.css";
// import InfoIcon from '@mui/icons-material/Info';
// import CircleIcon from '@mui/icons-material/Circle';
// function Widget() {

//     const newsArticle = (heading , subtitle) => {
//         <div className="widgets__article">
//             <div className="widgets__articleLeft">
//             <CircleIcon />
//             </div>
//             <div className="widgets__articleRight">
//                 <h4>{heading}</h4>
//                 <p>{subtitle}</p>
//             </div>
//         </div>

//     }
//   return (
//     <div className="widgets">
//         <div className="widgets__header">
//             <h2>LinkedIn News</h2>
//             <InfoIcon />
//         </div>
//         {newsArticle("Chandigarh - Jaipur - Hyderabad" , "Top - news -9000 readers")}
//     </div>
//   )
// }

// export default Widget


import React from 'react';
import './Widget.css';
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {

  const newsArticle=(heading, subtitle)=> (
          <div className='widgets__article'>
            <div className='widgets__articleLeft'>
              <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
              <h4>{heading}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
  )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />

        </div>
        {newsArticle("Thank you so much for Signing up to YP's LinkedIN Clone",'Top news - 999999+ readers')}
        {newsArticle("Kedarkantha Trek the Best Winter trek ",'Top news - 999 readers')}
        {newsArticle("Ali Bedni Bugyal Trek and Roopkund Lake Trek to be the next trek.",'International news - 600 readers')}
        {newsArticle("Jammu and Kashmir Congress president Ghulam Ahmad Mir resigns Jammu and Kashmir Congress president Ghulam Ahmad Mir resigns",'National news - 100000 readers')}
        {newsArticle("Galaxy Watch 5 leak gives best look yet at Samsung’s upcoming smartwatches",'Techie Delight news - 78999 readers')}
        {newsArticle("Amazon Prime day sale abbout to go Live on 23rd - 24th July in India",'Top news - 616 readers')}
        

    </div>
    
  )
}

export default Widget;