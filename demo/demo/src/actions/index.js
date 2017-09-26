import {SELECT_CHAMPION} from "./actionTypes";
export const selectChampion =(champion)=>{
  console.log(`${champion.name}`);
  return{
    type:"SELECT_CHAMPION",
    payload:champion
  }
}
