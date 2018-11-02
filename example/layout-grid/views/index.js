import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Typography from '../../../components/typography';
import LayoutGrid1 from './layout-grid-1';
import LayoutGrid2 from './layout-grid-2';
import LayoutGrid3 from './layout-grid-3';
import LayoutGrid4 from './layout-grid-4';
import LayoutGrid5 from './layout-grid-5';
import LayoutGrid6 from './layout-grid-6';

const style = {
    backgroundColor: '#444444',
    color: '#FFFFFF'
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

    data2 = [
        {
            cells: [
                {
                    cell: 'cell-1-1',
                    span: '1',
                    style
                },
                {
                    cells: [
                        {
                            cell: 'cell-1-2-1',
                            span: '3',
                            style
                        },
                        {
                            cell: 'cell-1-2-1',
                            span: '3',
                            style
                        },
                        {
                            cell: 'cell-1-2-3',
                            span: '5',
                            style
                        }
                    ],
                    span: '11',
                }
            ],
            span: '6',
            order: 1,
            style: {
                backgroundColor: '#999999',
            }
        },
        {
            cells: [
                {
                    cell: 'cell-2-1',
                    style
                },
                {
                    cell: 'cell-2-1',
                    style
                },
                {
                    cell: 'cell-2-3',
                    style
                }
            ],
            order: 0,
            align: 'bottom',
            span: '6',
            style: {
                backgroundColor: '#999999',
            }
        }
    ];


    render(){
        return (
            <div>
                {/*<LayoutGrid cells={this.data}/>*/}
                {/*<Typography type='h3'>Basic Usage</Typography>*/}
                <LayoutGrid1/>
                {/*<Typography type='h3'>Basic Usage</Typography>*/}
                <LayoutGrid2/>
                <LayoutGrid3/>
                <LayoutGrid4/>
                <LayoutGrid5/>
                <LayoutGrid6/>
            </div>
        )
    }
}

export default Demo;