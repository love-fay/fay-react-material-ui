/**
 * Create by fay on 2018-11-01 19:51
 */
import React from 'react';
import LinearProgress from '../../../components/linear-progress';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <LinearProgress/>
                <br/>
                <LinearProgress indeterminate/>
                <br/>
                <LinearProgress reversed/>
                <br/>
                <LinearProgress closed/>
                <br/>
            </div>
        )
    }
}

export default Demo;