/**
 * Create by fay on 2018-11-01 19:51
 */
import React from 'react';
import LayoutGrid from '../../../components/layout-grid';

const style = {
    backgroundColor: '#444444',
    color: '#FFFFFF',
};

class Demo extends React.Component{

    data = [
        {
            cell: <div>cell-1-bottom</div>,
            span: '2',
            align: 'bottom',
            style: {...style, height: '50px'}
        },
        {
            cell: <div>cell-2-top</div>,
            span: '3',
            align: 'top',
            style: {...style, height: '50px'}
        },
        {
            cell: <div>cell-3-center</div>,
            span: '7',
            align: 'center',
            style: {...style, height: '100px'}
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