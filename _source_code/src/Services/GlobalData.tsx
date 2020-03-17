class globalData {
    // constructor(){}
    public readonly noLink : string = "javascript:void(0)";
    public readonly baseRoute : string = (navigator.userAgent === "ReactSnap")
        ? ""
        : ""; // /app /TeachersGuild  https://avivabachi.github.io/TeachersGuild

    public isMobile() : boolean {
        return(window.innerWidth <= 980 || window.screen.width <= 980);
    }

    public worker : any = [
        {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/5a6b74b641e4ab00014b430d_English_Alysha-23002.jpg',
            job: 'COMMUNITY MANAGER, EDUCATOR',
            name: 'Alysha English',
            text: 'This is some text inside of a div block.'
        }, {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/5a74bd4cdd9b890001e23a9a_Corio_Larry-24594.jpg',
            job: 'PROGRAM LEAD, EDUCATOR',
            name: 'Larry Corio',
            text: 'This is some text inside of a div block.'
        }, {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/5b58bd917d582b7964d8f646_IMG_2031%20(1).JPG',
            job: 'CONTENT STRATEGIST, EDUCATOR',
            name: 'Adha Mengis',
            text: 'This is some text inside of a div block.'
        }, {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/5c927f24b30f710aa47fb4d7_Diaz_Lusmaia-9236.jpg',
            job: 'PROGRAM MANAGER, EDUCATOR',
            name: 'Lusmaia Diaz',
            text: 'This is some text inside of a div block.'
        }, {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/59dd1bd2bd40a30001d3b2cf_team_molly.png',
            job: 'DIRECTOR',
            name: 'Molly McMahon',
            text: 'This is some text inside of a div block.'
        }, {
            cardIMG: 'https://uploads-ssl.webflow.com/59d5399de966f4000142dd37/59f7ee2573ce9d0001ffa33f_Gaynor.jpg',
            job: 'ADVISOR, EDUCATOR',
            name: 'Gaynor Brown',
            text: 'This is some text inside of a div block.'
        }
    ]

}

const GlobalData = new globalData();
export default GlobalData;