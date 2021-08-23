import React from 'react';
import svg from './../assets/images/svg/pattern.svg';

export default function title_comp({bool,heading}) {

    let text=String(heading);
    let style={
        "margin-bottom":"65px"
    }

    return (
        
        <div className={`d-flex justify-content-between align-items-center ${bool==="true"?"flex-row-reverse":''} `} style={style}>
            <h2 className="title word-nobreak display-5"> 
                <span className="heading_before_style position-relative">{text.slice(0,2)}</span>
                <span>{text.slice(2)}</span> 
            </h2>
            <hr className="flex-fill " />
            <img className="pattern" src={svg} alt="sample"/>
        </div>
    )
}
