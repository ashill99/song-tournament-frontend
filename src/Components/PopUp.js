import React  from "react";
import banger from './banger.png'

function PopUp({seen, setSeen}) {

 

  return ( 
   <div className="modal">
     <div className="modal_content">
     <span className="close"></span>
     <img className="banger-logo" src={banger} alt="Banger"></img>
    </div>
   </div>
  );
 }

export default PopUp