/**
 * Create by fay on 2018-11-01 19:51
 */
import React from 'react';
import LayoutGrid from '../../../components/layout-grid';

const style = {
    backgroundColor: '#444444',
    color: '#FFFFFF',
    height: '50px'
};

class Demo extends React.Component{

    data = [
        {
            cell: <div>cell-1</div>,
            span: '2',
            style
        },
        {
            cell: <div>cell-2</div>,
            span: '3',
            style
        },
        {
            cell: <div>cell-3</div>,
            span: '5',
            style
        }
    ];

    render(){
        return (
            <div>
                <LayoutGrid cells={this.data} align='right' fixedColumnWidth/>
                <LayoutGrid cells={this.data} align='left' fixedColumnWidth/>
                <LayoutGrid cells={this.data} align='center' fixedColumnWidth/>
            </div>
        )
    }
}

export default Demo;