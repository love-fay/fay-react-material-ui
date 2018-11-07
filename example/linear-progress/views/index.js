import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import LinearProgress from './linear-progress';

class Demo extends React.Component{

    cells = [
        {
            cell: <LinearProgress/>,
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