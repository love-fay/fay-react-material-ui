/**
 * Create by fay on 2018-11-02 20:52
 */
import React from 'react';
import Checkbox from '../../../components/checkbox';

class Checkboxes extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Checkbox label='Checkbox 2' checkKey='checkbox-2' checked/>
                <Checkbox label='Checkbox 1' checkKey='checkbox-1' checked/>
                <Checkbox label='This is my disabled checkbox' key='basic-disabled-checkbox' disabled/>
                <Checkbox label='Checkbox 4' checkKey='checkbox-4' checked/>
                <Checkbox label='Checkbox 3' checkKey='checkbox-3' indeterminate/>
            </div>
        )
    }
}

export default Checkboxes;