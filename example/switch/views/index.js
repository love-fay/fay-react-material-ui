import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Switch from './switch';

class Demo extends React.Component{

    cells = [
        {
            cell: <Switch/>,
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