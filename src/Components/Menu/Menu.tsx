import React, {Component, Fragment} from 'react';
import './Menu.module.scss';
import MenuMobileView from './MenuMobile';
import MenuDesktopView from './MenuDesktop';
import {inject, observer} from "mobx-react";
import GlobalStore from '../../GlobalStore';
import { toJS } from 'mobx';

interface iProps {
    isMobile : boolean;
    GlobalStore?:GlobalStore
}
interface iState {
    scroll : number;
}

@inject('GlobalStore')
@observer
export default class MenuView extends Component < iProps,
iState > {
    private _store?: GlobalStore;
    
    constructor(props : iProps) {
        super(props);
        this.state = {
            scroll: 0
        };
        this._store = this.props.GlobalStore;
        console.log(toJS(this._store?.queryParam));
    }
    componentDidMount() {
        window.addEventListener('scroll', this.HandelScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.HandelScroll.bind(this));
        this._store?.clearEvents();
    }

    // static getDerivedStateFromProps(nextProps : iProps, prevState : iState) {
    // if (nextProps.isMobile != null && nextProps.isMobile != prevState.isMobile)
    // {         return {             ...prevState,             isMobile:
    // nextProps.isMobile         };     }     return null; }

    HandelScroll = () => {
        this.setState({
            scroll: window.scrollY / 150
        })
    }

    render() {
        return !(this.props.isMobile)
            ? (<MenuDesktopView scroll={this.state.scroll}/>)
            : (<MenuMobileView scroll={this.state.scroll}/>)
    }
}
