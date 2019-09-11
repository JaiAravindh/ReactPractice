import React from 'react';

//Do the Following :
//npm install glamor --save

import {css} from 'glamor';

const items = props.news.map((item) => {
    
     let news_item = css({
          padding:'20px',
          boxSizing :'border=box',
          borderBotton : '1px solid grey',
          ':hover'"{
          color:'red'
     }
     })
     
     let item_grey = css({
          background : 'lightgrey',
     })
     
     
     return(
          
         <div {...news_item} {...item_grey}>
             <h3>
                 {item.title}
             </h3>
             <div>
                 {item.feed}
             </div>
         </div>
     )   
    });

    for(i=0; i<array; i++){
        array[i].item.title
    } 
return(items)
}

export default NewsList;
