const reducer=(state,action)=>{
    if(action.type==="HOME_PAGE"){
     return {
        ...state,
        name: action.payload.name,
        image:action.payload.image,
        scope: action.payload.scope
     }
    }
    if(action.type==="ABOUT-SECTION1"){
     return {
        ...state,
        name: action.payload.name,
        image:action.payload.image,
        scope: action.payload.scope
     }
    }
    if(action.type==="CONTACT-SECTION1"){
     return {
        ...state,
        name: action.payload.name,
        image:action.payload.image,
        scope: action.payload.scope
     }
    }
    if(action.type==="SERVICES_PAGE"){
      return{
         ...state,
         sources: action.payload.sources
      }
    }
    return state;
}

export default reducer;