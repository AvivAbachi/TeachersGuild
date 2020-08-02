import {action, observable} from 'mobx';
//import {_api} from "./api";
import {EventEmitter} from 'eventemitter3';
// import _ from "lodash";

export default class GlobalStore {
  protected readonly EE = new EventEmitter();
  // @observable appName: string = 'App';
  @observable locationUrl: string = '/';
  @observable queryParam: any = {} as any;
  // public onChangeLanguage(cb: any): void {
  //   //user logged-in , ....
  //   this.EE.on('lang-changed', cb, this); //subscribe to changes from component with callback
  // }
  // private FireChangeLanguage(): void {
  //   this.EE.emit('lang-changed'); //fire event to subscribers
  // }
  public clearEvents() {
    this.EE.removeAllListeners();
  }
  @action
  setPageNavParams(locationUrl: string, queryParam: any): void {
    //changes obeservable
    this.locationUrl = locationUrl;
    this.queryParam = queryParam;
  }
  //@observable loggedInUser = {} as any;
}
