import React from 'react';
import '../style/index.scss';
import {getCorrectEventName} from '@material/animation';

const eventToListenFor = getCorrectEventName(window, 'animationstart');
console.log(eventToListenFor);

export default () => {
    return (
        <div>
            Animation
        </div>
    )
};