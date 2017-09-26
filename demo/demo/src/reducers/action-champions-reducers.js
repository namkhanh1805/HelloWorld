
export default (state ={},action)=>{
  switch (action.type) {
    case "SELECT_CHAMPION":
       return action.payload;
      break;
    default:
      return {};
  }
  return {};
}
