import React from 'react';
import './picholder.css';
import Nogifs from './nogifs';
import Loading from './loading';
    const PicHolder = props =>{
        const results = props.data 
        let gifs  = <Loading />;
        if(results.length >0){
                 gifs = results.map(gif => {
                return (
                    <li className="gif-wrap" key={gif.id}><img src={gif.images.fixed_height.url}  alt={gif.id} /></li>
                )
            })
        }else{
            gifs = <Nogifs />
        }
      
           return ( 
                <div className="pic-holder">
                    <ul className="pic-holder-container">
                           {gifs}
                    </ul>
                </div>
            );
    }
 
    export default PicHolder;