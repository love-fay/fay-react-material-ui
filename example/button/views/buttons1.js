/**
 * Create by fay on 2018-11-01 20:35
 */
import React from 'react';
import Button from '../../../components/button';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <Button>
                    Button
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='smile'>
                    Button
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='smile-o'>
                    Button
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button disabled>
                    Button
                </Button>
            </div>
        )
    }
}

export default Demo;