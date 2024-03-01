import React from "react";
import "./combined.css";

function ProgrammerForm({allProgrammers, onChange, addProgrammer}) {
    return (
        <div className={"programmer-form"}>
            <h2>Přidat programátora</h2>
            <input type={"text"} name={"firstName"} value={allProgrammers.firstName} onChange={onChange} placeholder="Jméno"/>
            <input type={"text"} name={"lastName"} value={allProgrammers.lastName} onChange={onChange} placeholder="Příjmení"/>
            <select name={"level"} value={allProgrammers.level} onChange={onChange}>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
            </select>
            <button onClick={addProgrammer}>Přidat</button>
        </div>
    );
}

export default ProgrammerForm;
