class globalData {
    // constructor(){}
    public readonly noLink : string = "#!"; //"javascript:void(0)";
    public readonly baseRoute : string = (navigator.userAgent === "ReactSnap")
        ? ""
        : ""; // /app /TeachersGuild  https://avivabachi.github.io/TeachersGuild

    public isMobile() : boolean {
        return(window.innerWidth <= 980 || window.screen.width <= 980);
    }
}

const GlobalData = new globalData();
export default GlobalData;