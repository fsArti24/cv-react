import React, { useState, useEffect } from 'react';
import "./combined.css";

function Tasks({ programmers }) {
    const [linesOfCode, setLinesOfCode] = useState('');
    const [days, setDays] = useState('');
    const [isPlanValid, setIsPlanValid] = useState(false);
    const [planSubmitted, setPlanSubmitted] = useState(false);

    const totalLinesPerDay = programmers.reduce((total, programmer) => {
        return total + (programmer.level === 'junior' ? 100 : 200);
    }, 0);

    useEffect(() => {
        const plan = linesOfCode / days;
        validateData(plan);
    }, [linesOfCode, days]);

    const validateData = (plan) => {
        if (days === "" || days <= 0 || linesOfCode === "" || linesOfCode <= 0) {
            setIsPlanValid(false);
        } else if (plan >= totalLinesPerDay) {
            setIsPlanValid(false);
        } else {
            setIsPlanValid(true);
        }
    };

    const handleChange = (event) => {
        setPlanSubmitted(false);
        const { name, value } = event.target;
        if (name === "lines") {
            setLinesOfCode(value);
        } else if (name === "days") {
            setDays(value);
        }
    };

    const handleSubmit = () => {
        if (isPlanValid) {
            console.log("Odesílání dat:", { linesOfCode, days });
            setLinesOfCode('');
            setDays('');
            setIsPlanValid(false);
            setPlanSubmitted(true);
        }
    };

    return (
        <div>
            <h2>Naplánování úkolu</h2>
            <input
                type="number"
                name="lines"
                value={linesOfCode}
                onChange={handleChange}
                placeholder="Počet řádků kódu"
            />
            <input
                type="number"
                name="days"
                value={days}
                onChange={handleChange}
                placeholder="Časový limit (dny)"
            />
            <button
                style={{ backgroundColor: isPlanValid ? 'green' : 'red' }}
                disabled={!isPlanValid}
                onClick={handleSubmit}
            >
                Schválit plán
            </button>
            {planSubmitted && <p>Plán byl úspěšně odeslán a schválený.</p>}
        </div>
    );
}

export default Tasks;
