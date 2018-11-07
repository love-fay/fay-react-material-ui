/**
 * Create by fay on 2018-11-01 19:51
 */
import React from 'react';
import Switch from '../../../components/switch';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <Switch label='off/on' htmlFor="basic-switch"/>
                <br/>
                <Switch label='off/on' htmlFor="basic-switch" disabled/>
                <br/>
                <Switch label='off/on' checked/>
            </div>
        )
    }
}

export default Demo;