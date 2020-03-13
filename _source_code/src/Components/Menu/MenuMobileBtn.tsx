import React, {Component} from 'react';
import {ICallbackActionProps} from "../../Models/interfaces";

export default class MobileBtn extends Component <ICallbackActionProps, {}> {
    constructor(props: ICallbackActionProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <a href="#!" onClick={this.props.clickCallback} className="fas fa-bars  fa-2x"/>

        )
    }
}