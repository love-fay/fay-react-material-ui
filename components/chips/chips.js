import React from 'react';
import './style/chips.scss';
import Icon from '../icon';
import classnames from 'classnames';
import {MDCChipSet} from '@material/chips';


class Demo extends React.Component{

    constructor(props){
        super(props);
        this.chips = React.createRef();
    }

    componentDidMount(){
        new MDCChipSet(this.chips.current);
        // if(this.props.input){
        //     this.chips.current.addEventListener('keydown', function(event) {
        //         if (event.key === 'Enter' || event.keyCode === 13) {
        //             const chipEl = document.createElement('div');
        //             // ... perform operations to properly populate/decorate chip element ...
        //             chipSetEl.appendChild(chipEl);
        //             chipSet.addChip(chipEl);
        //         }
        //     });
        // }
    }

    render(){
        const {chipGroup, filter, choice, input} = this.props;
        const chipsComponent = chipGroup.map((item, i) => {
            const {leadingIconType, trailingIconType, disabled, raised, className, children, buttonType, unelevated, outlined, dense, rippleUnbounded, content, choice, filterIconType} = item;
            return (
                <div className="mdc-chip" tabIndex="0" key={i}>
                    {leadingIconType && <Icon className="mdc-chip__icon mdc-chip__icon--leading" type={leadingIconType}/>}
                    <div className="mdc-chip__checkmark">
                        {filterIconType && <Icon className="mdc-chip__checkmark-svg" type={filterIconType}/>}
                    </div>
                    <div className="mdc-chip__text">{content}</div>
                    {trailingIconType && <Icon className="mdc-chip__icon mdc-chip__icon--trailing" type={trailingIconType}/>}
                </div>
            )
        });

        return (
            <div className={classnames("mdc-chip-set", {'mdc-chip-set--choice': choice}, {'mdc-chip-set--filter': filter}, {'mdc-chip-set--input': input})} ref={this.chips}>
                {chipsComponent}
            </div>
        )
    }
}

export default Demo;