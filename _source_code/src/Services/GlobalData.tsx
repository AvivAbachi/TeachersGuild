class globalData {
    // constructor(){}
    public readonly noLink : string = "javascript:void(0)";
    public readonly baseRoute : string = (navigator.userAgent === "ReactSnap")
        ? ""
        : ""; // /app /TeachersGuild  https://avivabachi.github.io/TeachersGuild
}

const GlobalData = new globalData();
export default GlobalData;