import React, {Component} from 'react';
import menuStyles from './Menu.module.scss';
import styles from './MenuDesktop.module.scss';
import {NavLink} from 'react-router-dom';
import GlobalData from '../../Services/GlobalData';
import Logo from './tgfooterlogo.png';
import LogoScroll from './TGLogo.png';
import MenuPrograms from './MenuPrograms';

interface iProps {
  scroll: number;
}

interface IState {
  showProgramsSubmenu: boolean;
  menuIcon: string;
}

export default class Desktop extends Component<iProps, IState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      showProgramsSubmenu: false,
      menuIcon: 'fas fa-angle-down',
    };
  }
  componentDidMount() {}

  toggleProgramSub = (value?: boolean) => {
    let show = value != null ? value : !this.state.showProgramsSubmenu;
    this.setState({
      showProgramsSubmenu: show,
      menuIcon: show ? 'fas fa-angle-up' : 'fas fa-angle-down',
    });
  };
  render() {
    let isScroll: boolean = this.props.scroll > 0.5;
    let isClass: any = this.state.showProgramsSubmenu || isScroll ? styles.scroll : styles.notScroll;
    return (
      <div>
        <nav
          style={{
            background: `rgba(255,196,12,${!this.state.showProgramsSubmenu ? this.props.scroll : 1})`,
          }}>
          <NavLink to='/'>
            <img src={this.state.showProgramsSubmenu || isScroll ? LogoScroll : Logo} alt='Logo' width='240px' onClick={(e) => this.toggleProgramSub(false)} />
          </NavLink>
          <div className={styles.menu}>
            <p className={isClass} onClick={(e) => this.toggleProgramSub()}>
              Programs
              <i className={this.state.menuIcon} />
            </p>
            <a className={isClass} href={GlobalData.noLink} onClick={(e) => this.toggleProgramSub(false)}>
              Approach
            </a>
            <a className={isClass} href={GlobalData.noLink} onClick={(e) => this.toggleProgramSub(false)}>
              Solutions
            </a>

            <NavLink className={isClass} activeClassName={styles.active} to='/About' onClick={(e) => this.toggleProgramSub(false)}>
              About US
            </NavLink>

            <a className={isClass} href={GlobalData.noLink} onClick={(e) => this.toggleProgramSub(false)}>
              Work With Us
            </a>
          </div>
          <div className={menuStyles.login}>
            <a href={GlobalData.noLink} className={!this.state.showProgramsSubmenu && !isScroll ? menuStyles.notScroll : ''}>
              SIGN UP
              <br />
              <small>or</small>
              LOGIN
            </a>
          </div>
        </nav>
        {this.state.showProgramsSubmenu ? <MenuPrograms CallClose={() => this.toggleProgramSub(false)} /> : null}
      </div>
    );
  }
}
