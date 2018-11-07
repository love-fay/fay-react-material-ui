import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import FloatingLabel from './floating-label';

class Demo extends React.Component{

    cells = [
        {
            cell: <FloatingLabel/>,
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