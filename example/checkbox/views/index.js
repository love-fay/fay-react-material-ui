import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import Checkboxes from './checkboxes';

class Demo extends React.Component{

    cells = [
        {
            cell: <Checkboxes/>,
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