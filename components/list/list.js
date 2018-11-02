/**
 * Create by fay on 2018-10-30 20:39
 */
import React from 'react';
import './style/index.scss';
import Icon from '../icon';

class List extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const ulContent = this.props.data.map((item, i) => {
            const {graphic, text} = item;
            return (
                <li className="mdc-list-item">
                    {graphic && <Icon className="mdc-list-item__graphic" type={graphic}/>}
                    <span className="mdc-list-item__text">{text}</span>
                </li>
            )
        });
        return (
            <ul className="mdc-list" aria-orientation="vertical">
                {ulContent}
            </ul>
        )
    }
}

export default List;