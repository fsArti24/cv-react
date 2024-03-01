import React from "react";
import "./combined.css";

function Navigation({active, onChoose}) {

    const handleClick = (event) => {
        onChoose(event.target.name);
    };

    return (
        <div className={"page-navigation"}>
            <button className={`navigation-btn ${active === 1 ? 'active' : ""}`}
                    onClick={handleClick}
                    name="programmers"
            >Programátoři</button>
            <button className={`navigation-btn ${active === 2 ? 'active' : ""}`}
                    onClick={handleClick}
                    name="tasks"
            >Úkoly</button>
        </div>
    );
}

export default Navigation;
