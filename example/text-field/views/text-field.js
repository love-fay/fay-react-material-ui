/**
 * Create by fay on 2018-11-02 20:52
 */
import React from 'react';
import TextField from '../../../components/text-field';
import TextFieldFullwidth from '../../../components/text-field/text-field-fullwidth';
import TextFieldTextarea from '../../../components/text-field/text-field-textarea';
import TextFieldIcon from '../../../components/text-field/text-field-icon';
import TextFieldHelperText from '../../../components/text-field/text-field-helper-text';
import Typography from '../../../components/typography';

class Demo extends React.Component{

    constructor(props){
        super(props);
    }

    style={
        margin: '20px'
    };

    render(){
        return (
            <div>
                <Typography type='h4'>basic</Typography>
                <div style={this.style}>
                    <TextField label='Hint text'/>
                </div>
                <div style={this.style}>
                    <TextField label='Hint text' disabled/>
                </div>
                <div style={this.style}>
                    <TextField label='Hint text' outlined/>
                </div>
                <div style={this.style}>
                    <TextFieldFullwidth/>
                </div>
                <div style={this.style}>
                    <TextFieldTextarea label='Textarea Label'/>
                </div>
                <div style={this.style}>
                    <TextFieldTextarea label='Textarea Label' disabled/>
                </div>
                <Typography type='h4'>icon</Typography>
                <div style={this.style}>
                    <TextFieldIcon label='Your Name'/>
                </div>
                <div style={this.style}>
                    <TextFieldIcon label='Your Name' outlined/>
                </div>
                <div style={this.style}>
                    <TextFieldIcon label='Your Name' type='trailing'/>
                </div>
                <div style={this.style}>
                    <TextFieldIcon label='Your Name' type='trailing' outlined/>
                </div>
                <div style={this.style}>
                    <TextFieldHelperText label='Username' htmlFor='username' outlined helperText='This will be displayed on your public profile'/>
                </div>
                <div style={this.style}>
                    <TextFieldHelperText persistent label='Username' htmlFor='username' outlined helperText='This will be displayed on your public profile'/>
                </div>
            </div>
        )
    }
}

export default Demo;