/**
 * Create by fay on 2018-10-30 20:39
 */
import React from 'react';
import './style/index.scss';
import Icon from '../icon';
import {MDCList} from "@material/list";

class SingleSelection extends React.Component{

    constructor(props){
        super(props);
        this.list = React.createRef();
    }

    componentDidMount(){
        const list = MDCList.attachTo(this.list.current);
        list.singleSelection = true;
    }

    render(){
        const ulContent = this.props.data.map((item, i) => {
            const {graphic, text} = item;
            if(i === 0){
                return (
                    <li className="mdc-list-item" tabIndex="0">
                        {graphic && <Icon className="mdc-list-item__graphic" type={graphic}/>}
                        <span className="mdc-list-item__text">{text}</span>
                    </li>
                )
            }
            return (
                <li className="mdc-list-item">
                    {graphic && <Icon className="mdc-list-item__graphic" type={graphic}/>}
                    <span className="mdc-list-item__text">{text}</span>
                </li>
            )
        });
        return (
            <ul className="mdc-list" aria-orientation="vertical" ref={this.list}>
                {ulContent}
            </ul>
        )
    }
}

export default SingleSelection;