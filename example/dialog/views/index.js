import React from 'react';
import SimpleDialog from './simple-dialog';
import ConfirmationDialog from './confirmation-dialog';
import LayoutGrid from '../../../components/layout-grid';

const dialogs = [
    {
        cell: <SimpleDialog/>,
        span: 12,
        style: {
            textAlign: 'center'
        }
    },
    {
        cell: <ConfirmationDialog/>,
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
                <LayoutGrid cells={dialogs}/>
            </div>
        )
    }
}

export default Demo;