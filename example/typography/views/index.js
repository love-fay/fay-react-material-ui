/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import Typography from './typography';
import LayoutGrid from '../../../components/layout-grid';

const typographys = [
    {
        cell: <Typography/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    }
];

class Demo extends React.Component{


    render(){
        return (
            <div>
                <LayoutGrid cells={typographys}/>
            </div>
        )
    }
}

export default Demo;