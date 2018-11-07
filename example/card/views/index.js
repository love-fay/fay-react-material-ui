import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Card from './card';

class Demo extends React.Component{

    cells = [
        {
            cell: <Card/>,
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