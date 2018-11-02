import React from 'react';
import Button from '../../../components/button/icon-button';

class Demo extends React.Component{


    render(){
        return (
            <div>
                <Button iconType='heart-o'/>
                <Button iconType='heart-o' disabled/>
                <Button toggleContent={['heart-o', 'heart']}/>
                {/*<Button toggleSrc={['heart-o', 'heart']} toggleType='img'/>*/}
            </div>
        )
    }
}

export default Demo;