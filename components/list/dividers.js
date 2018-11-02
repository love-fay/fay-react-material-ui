/**
 * Create by fay on 2018-10-30 20:39
 */
import React from 'react';
import './style/index.scss';
import List from './list';

class Dividers extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const content = this.props.data.map((item, i)=>{
            if(i === 0){
                return <List data={item}/>;
            }
            return [
                <hr className="mdc-list-divider" key={"divider"+i}/>,
                <List data={item} key={"list"+i}/>
            ]
        });
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default Dividers;