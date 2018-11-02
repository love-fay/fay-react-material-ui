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
            cell: 'cell-1',
            style
        },
        {
            cell: 'cell-2',
            style
        },
        {
            cell: 'cell-3',
            style
        }
    ];

    render(){
        return (
            <div>
                <LayoutGrid cells={this.data}/>
            </div>
        )
    }
}

export default Demo;