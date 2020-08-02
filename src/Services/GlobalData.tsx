class globalData {
  // constructor(){}
  public readonly noLink: string = '#!';
  public readonly baseRoute: string = window.location.hostname === 'localhost' ? '' : '/TeachersGuild';
}

const GlobalData = new globalData();
export default GlobalData;
