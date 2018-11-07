/**
 * Create by fay on 2018-11-01 19:51
 */
import React from 'react';
import Slider from '../../../components/slider';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <Slider/>
                <br/>
                <Slider discrete/>
                <br/>
                <Slider displayMarkers/>
            </div>
        )
    }
}

export default Demo;