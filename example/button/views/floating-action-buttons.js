import React from 'react';
import Button from '../../../components/button/floating-action-button';
import '../style/floating-action-buttons.scss';

class Demo extends React.Component{


    render(){
        return (
            <div>
                <Button iconType='heart_o'/>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='plus' extended>
                    Create
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='plus' extended mini rippleUnbounded>
                    Create
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='plus' exited/>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='heart_o' className='app-fab--absolute'/>
            </div>
        )
    }
}

export default Demo;