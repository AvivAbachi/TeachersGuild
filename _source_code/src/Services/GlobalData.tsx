class globalData {
    // constructor() {
    // }

    // public AppName: string = "חנות מוצרי חשמל";

      //https://avivabachi.github.io/TeachersGuild

      public readonly baseRoute:string = (navigator.userAgent === "ReactSnap") ? "" : "/TeachersGuild"; // /app

    //
    // isMobile() {
    //     return (window.innerWidth <= 980 || window.screen.width <= 980);
    // }
}

const GlobalData = new globalData();
export default GlobalData;