import React from 'react';
import {List, TwoLine, Groups, Dividers, SingleSelection, PreSelected} from '../../../components/list';

class Demo extends React.Component{

    render(){
        const basicUsage = [{graphic: 'inbox', text: 'Single-line item'}, {graphic: 'inbox', text: 'Single-line item'}, {graphic: 'inbox', text: 'Single-line item'}];
        const twoLine = [
            {text: {primary:'First-line text', secondary: 'Second-line text'}},
            {text: {primary:'First-line text', secondary: 'Second-line text'}},
            {text: {primary:'First-line text', secondary: 'Second-line text'}}
        ];
        const list = [{text: 'line item'}, {text: 'line item'}, {text: 'line item'}];
        const groups = [
            {
                subheader: 'List 1',
                list: list
            },
            {
                subheader: 'List 2',
                list: list
            }
        ];

        const dividers = [
            [{text: 'Item 1 - List 1'}, {text: 'Item 2 - List 1'}],
            [{text: 'Item 1 - List 2'}, {text: 'Item 2 - List 2'}]
        ];

        const singleSelection = [{text: 'Single-line item'}, {text: 'Single-line item'}, {text: 'Single-line item'}];
        const preSelected = [{text: 'Single-line item'}, {text: 'Single-line item', selected: true}, {text: 'Single-line item'}];
        return (
            <div>
                <List data={basicUsage}/>
                <br/>
                <TwoLine data={twoLine}/>
                <br/>
                <Groups data={groups}/>
                <br/>
                <Dividers data={dividers}/>
                <br/>
                <SingleSelection data={singleSelection}/>
                <br/>
                <PreSelected data={preSelected}/>
            </div>
        )
    }
}

export default Demo;