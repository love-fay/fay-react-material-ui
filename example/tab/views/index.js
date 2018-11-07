import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import Tabs from './tabs';

class Demo extends React.Component{

    cells = [
        {
            cell: <Tabs/>,
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