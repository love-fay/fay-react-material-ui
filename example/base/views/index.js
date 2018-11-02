import React from 'react';
import '../style/index.scss';
import {MDCComponent, MDCFoundation} from '@material/base';

const eventToListenFor = getCorrectEventName(window, 'animationstart');
console.log(eventToListenFor);

export default () => {
    return (
        <div>
            Animation
        </div>
    )
};