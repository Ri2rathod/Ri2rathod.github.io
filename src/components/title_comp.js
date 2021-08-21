import React from 'react';
import svg from './../assets/images/svg/pattern.svg';

export default function title_comp({bool}) {

    return (
        
        <div className={`d-flex justify-content-between align-items-center ${bool=="true"?"flex-row-reverse":''} `}>
            <h2 className="title word-nobreak">About My Selfs</h2>
            <hr className="flex-fill" />
            <img className="pattern" src={svg} alt="sample"/>
        </div>
    )
}
