import React from 'react';
import LayoutGird from '../../../components/layout-grid';
import ImageList from './image-list';

class Demo extends React.Component{

    cells = [
        {
            cell: <ImageList/>,
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