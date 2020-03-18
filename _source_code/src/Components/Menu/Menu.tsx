import React, {Component} from 'react';
import styles from './Menu.module.scss';
import MenuMobileView from './MenuMobile';
import MenuDesktopView from './MenuDesktop';

interface IState {
    isMobile : any;
}

export default class MenuView extends Component < {},
IState > {

    constructor(props : any) {
        super(props);
        this.state = {
            isMobile:  (window.innerWidth <= 980 || window.screen.width <= 980)
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
            isMobile: (window.innerWidth <= 980 || window.screen.width <= 980)
        })
    };

    render() {
        return (
            <div>
                {!this.state.isMobile
                    ? <MenuDesktopView/>
                    : <MenuMobileView/>}
            </div>

        )
    }
}
