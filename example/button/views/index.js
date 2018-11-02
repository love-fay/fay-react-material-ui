import React from 'react';
import LayoutGrid from '../../../components/layout-grid';
import Buttons1 from './buttons1';
import Buttons2 from './buttons2';
import Buttons3 from './buttons3';
import IconButtons from './icon-buttons';
import FloatingActionButtons from './floating-action-buttons';

const buttons = [
    {
        cell: <Buttons1/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    },
    {
        cell: <Buttons2/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    },
    {
        cell: <Buttons3/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    },
    {
        cell: <IconButtons/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    },
    {
        cell: <FloatingActionButtons/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    }
];

class Demo extends React.Component{


    render(){
        return (
            <div>
                <LayoutGrid cells={buttons} fixedColumnWidth align='center'/>
            </div>
        )
    }
}

export default Demo;