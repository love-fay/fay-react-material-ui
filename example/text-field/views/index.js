import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import TextField from './text-field';

class Demo extends React.Component{

    cells = [
        {
            cell: <TextField/>,
            span: 12
        }
    ];

    render(){
        return (
            <LayoutGird cells={this.cells} fixedColumnWidth/>
        )
    }
}

export default Demo;