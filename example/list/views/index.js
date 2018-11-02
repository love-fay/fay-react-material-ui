/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import List from './list';
import LayoutGrid from '../../../components/layout-grid';

const lists = [
    {
        cell: '',
        span: 4,
    },
    {
        cell: <List/>,
        span: 4,
    },
    {
        cell: '',
        span: 4,
    },
];

class Demo extends React.Component{


    render(){
        return (
            <div>
                <LayoutGrid cells={lists}/>
            </div>
        )
    }
}

export default Demo;