import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Elevation from './elevation';

class Demo extends React.Component{

    cells = [
        {
            cell: <Elevation/>,
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