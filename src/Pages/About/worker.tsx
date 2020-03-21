 import Alysha from '../../assets/workers/5a6b74b641e4ab00014b430d_English_Alysha-23002.jpg';
 import Larry from '../../assets/workers/5a74bd4cdd9b890001e23a9a_Corio_Larry-24594.jpg';
 import Adha from '../../assets/workers/5b58bd917d582b7964d8f646_IMG_2031.jpg';
 import Lusmaia from '../../assets/workers/5c927f24b30f710aa47fb4d7_Diaz_Lusmaia-9236.jpg';
 import Molly from '../../assets/workers/59dd1bd2bd40a30001d3b2cf_team_molly.jpg';
 import Gaynor from '../../assets/workers/59f7ee2573ce9d0001ffa33f_Gaynor.jpg';


 type woker =
 {
  cardIMG:string;
  job:string;
  name:string;
  text:string;
 }
 
 class Workers {
  public readonly list:woker[] =  [{
    cardIMG:Alysha ,
    job: "COMMUNITY MANAGER, EDUCATOR",
    name: "Alysha English",
    text: "This is some text inside of a div block."
  }, {
    cardIMG:Larry,
    job: "PROGRAM LEAD, EDUCATOR",
    name: "Larry Corio",
    text: "This is some text inside of a div block."
  }, {
    cardIMG: Adha,
    job: "CONTENT STRATEGIST, EDUCATOR",
    name: "Adha Mengis",
    text: "This is some text inside of a div block."
  }, {
    cardIMG: Lusmaia,
    job: "PROGRAM MANAGER, EDUCATOR",
    name: "Lusmaia Diaz",
    text: "This is some text inside of a div block."
  }, {
    cardIMG: Molly,
    job: "DIRECTOR",
    name: "Molly McMahon",
    text: "This is some text inside of a div block."
  }, {
    cardIMG: Gaynor,
    job: "ADVISOR, EDUCATOR",
    name: "Gaynor Brown",
    text: "This is some text inside of a div block."
  }];
}

const workers = new Workers();
export default workers;