import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Slider from './slider';

class Demo extends React.Component{

    cells = [
        {
            cell: <Slider/>,
            span: 12
        }
    ];

    render(){
        return (
            <LayoutGrid cells={this.cells} fixedColumnWidth/>
        )
    }
}

export default Demo;