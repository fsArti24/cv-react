import React from 'react';
import "./combined.css";

function Programmers({ allProgrammers, onDelete }) {

    return (
        <div className="list">
            {allProgrammers.map((programmer) => {
                return (
                    <div className="item" key={programmer.id}>
                        <span>
                        {programmer.lastName} {programmer.firstName} - {programmer.level}
                         </span>
                        <button className={"btn-delete"} onClick={() => onDelete(programmer.id)}>
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );

}

export default Programmers;
