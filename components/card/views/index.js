import React from 'react';
import Card from './card';
import '../style/index.scss';

class Demo extends React.Component{


    render(){
        return (
            <div className='my-card'>
                <Card>
                    Button
                </Card>
            </div>
        )
    }
}

export default Demo;