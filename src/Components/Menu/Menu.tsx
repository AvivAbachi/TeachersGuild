import React, {Component} from 'react';
import './Menu.module.scss';
import MenuMobileView from './MenuMobile';
import MenuDesktopView from './MenuDesktop';

interface iProps{
    isMobile:boolean;
}
export default class MenuView extends Component <iProps,{}> {
    render() {
        return (
            <div>
                {!this.props.isMobile
                    ? <MenuDesktopView/>
                    : <MenuMobileView/>}
            </div>

        )
    }
}
