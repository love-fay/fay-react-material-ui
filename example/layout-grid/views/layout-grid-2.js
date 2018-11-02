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
            cells: [
                {
                    cell: 'cell-1-1',
                    style
                },
                {
                    cells: [
                        {
                            cell: 'cell-1-2-1',
                            style
                        },
                        {
                            cell: 'cell-1-2-1',
                            style
                        },
                        {
                            cell: 'cell-1-2-3',
                            style
                        }
                    ],
                }
            ],
            style: {
                backgroundColor: '#999999',
            }
        },
        {
            cell: 'cell-2',
            style
        },
        {
            cell: 'cell-3',
            style
        },
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