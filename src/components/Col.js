import React from "react";

function Col({fluid, children}) {
    return (
     <div className="flex-items-default">
       {children}
     </div>
    );
  }
  
  export default Col;