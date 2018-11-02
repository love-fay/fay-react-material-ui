/**
 * Create by fay on 2018-10-30 20:39
 */
import React from 'react';
import './style/index.scss';
import List from "./list";

class Groups extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const groupContent = this.props.data.map((item, i) => {
            const {subheader, list} = item;
            return [
                <h3 className="mdc-list-group__subheader" key={'subheader'+i}>{subheader}</h3>,
                <List data={list} key={'list'+i}/>
            ]
        });
        return (
            <div className="mdc-list-group">
                {groupContent}
            </div>
        )
    }
}

export default Groups;