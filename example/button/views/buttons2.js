/**
 * Create by fay on 2018-11-01 20:35
 */
import React from 'react';
import Button from '../../../components/button';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <Button iconType='smile' raised>
                    Button
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='smile' unelevated>
                    Button
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button iconType='smile' outlined>
                    Button
                </Button>
            </div>
        )
    }
}

export default Demo;