import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import GridList from './grid-list';

class Demo extends React.Component{

    cells = [
        {
            cell: <GridList/>,
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