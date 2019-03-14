import React from 'react';

const IdCard = props => {
    
        return(
            <div className='single-student-div'>
            <div className='image-div'>
                <img src={props.img} alt="Profile"/>
            </div>
            <div>
         
            </div>
            <div>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Country: {props.country}</p>
            </div>
        </div>
        )
    
}

export default IdCard;