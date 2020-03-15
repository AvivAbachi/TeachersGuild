import React, {Component} from 'react';
import {ICallbackActionProps, ICallCloseProps} from '../../Models/interfaces'

interface Iprops extends ICallbackActionProps,
ICallCloseProps {mobileSub: boolean, btnColor: string}

interface Istate {}

export default class menuMobileBtn extends Component < Iprops,
Istate > {
    constructor(props : Iprops) {
        super(props);
        this.state = {
 
        };
    }

    


    render() {
        return (<i
            key={'dsa'}
            onClick={this.props.clickCallback}
            className={"fas fa-bars fa-2x"}
            style={{
            cursor: "pointer",
            color: this.props.btnColor
        }}/>)
    }
}