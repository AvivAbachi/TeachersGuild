import React, {Component} from 'react';
import styles from './Menu.module.scss';
import MenuMobileView from './MenuMobile';
import MenuDesktopView from './MenuDesktop';

import GlobalData from '../../Services/GlobalData';

interface IState {
    isMobile : boolean;
}

export default class MenuView extends Component < {},
IState > {

    constructor(props : any) {
        super(props);
        this.state = {
            isMobile: false
        }

    }

    componentDidMount() {
        this.UpdateMenuType();
        window.addEventListener('resize', this.UpdateMenuType.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.UpdateMenuType.bind(this))
    }

    UpdateMenuType = () => {
        this.setState({
            isMobile: GlobalData.isMobile()
        })
    };

    render() {
        return (
            <div>
                {/* {!this.state.isMobile */}
                    {/* ?  */}
                    <MenuDesktopView/>
                     {/* : <MenuMobileView/>} */}
            </div>

        )
    }
}
