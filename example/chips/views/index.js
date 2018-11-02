import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Chips from "./chips";

const chips = [
    {
        cell: <Chips/>,
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
                <LayoutGrid cells={chips} fixedColumnWidth align='center'/>
            </div>
        )
    }
}

export default Demo;