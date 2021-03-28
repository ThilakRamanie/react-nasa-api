import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = (props) => (
    <ReactLoading type={props.type} color={props.color} height={667} width={375} />
);
 
export default Loading;