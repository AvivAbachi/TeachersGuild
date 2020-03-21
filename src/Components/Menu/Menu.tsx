import React, {Component, Fragment} from 'react';
import './Menu.module.scss';
import MenuMobileView from './MenuMobile';
import MenuDesktopView from './MenuDesktop';

interface iProps {
    isMobile : boolean;
}
interface iState {
    scroll : number;
}

export default class MenuView extends Component < iProps,
iState > {
    constructor(props : iProps) {
        super(props);
        this.state = {
            scroll: 0
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.HandelScroll.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.HandelScroll.bind(this))
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
