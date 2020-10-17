import React from 'react';

/* const Rectangle = (props) => {
    return (
        <div>
            <p>Rectangle</p>
            <br/>
            <p>height={props.height}</p>
            <p>width={props.width}</p>
            <p>area={props.height*props.width}</p>
        </div>
    );
}; */
const Rectangle = (props) => {
    return (
        <div style={{
            height: props.height,
            width: props.width,
            backgroundImage: `url(${props.bgImg})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
        }}>
        </div >
    );
};
export default Rectangle;