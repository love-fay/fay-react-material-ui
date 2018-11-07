import React from 'react';
import Button from '../../../components/button/icon-button';

class Demo extends React.Component{


    render(){
        return (
            <div>
                <Button iconType='heart_o'/>
                <Button iconType='heart_o' disabled/>
                <Button toggleContent={['heart_o', 'heart']}/>
                {/*<Button toggleSrc={['heart-o', 'heart']} toggleType='img'/>*/}
            </div>
        )
    }
}

export default Demo;