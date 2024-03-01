import React from "react";
import "./combined.css";
function PageContainer({children}) {
    return (
        <div className="page-container">
            {children}
        </div>
    )
}

export default PageContainer;
