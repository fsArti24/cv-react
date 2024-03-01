import React, { useState } from 'react';
import rawData from "./programmersData.json";
import PageContainer from "./components/PageContainer";
import Navigation from './components/Navigation';
import Programmers from './components/Programmers';
import ProgrammerForm from "./components/ProgrammerForm";
import Tasks from './components/Tasks';

function App() {
    const [listOfProgrammers, setListOfProgrammers] = useState(rawData.programmers)
    const [activeSection, setActiveSection] = useState('programmers');

    const [newProgrammer, setNewProgrammer] = useState(
        {
            id: (listOfProgrammers.length > 0
                ? Math.max(...listOfProgrammers.map((programmer) => programmer.id)) + 1
                : 1),
            firstName: "",
            lastName: "",
            level: "junior",
        });

    const handleChange = (event) => {
        const updatedProgrammer = { ...newProgrammer, [event.target.name]: event.target.value };
        setNewProgrammer(updatedProgrammer);
    };

    const handleAdd = (event) => {
        if (!newProgrammer.firstName.trim() || !newProgrammer.lastName.trim()) {
            alert("Musí být vyplněno jméno i příjmení");
            console.error("Jméno a příjmení musí být vyplněno.");
            return;
        }

        setListOfProgrammers((listOfProgrammers) => {
            return [...listOfProgrammers, newProgrammer]
        });
        const newProgrammerId = newProgrammer.id + 1;
        const updatedProgrammer = {
            id: newProgrammerId,
            firstName: "",
            lastName: "",
            level: newProgrammer.level
        };
        setNewProgrammer(updatedProgrammer);
    };


    const handleDelete = (idToDelete) => {
        setListOfProgrammers(listOfProgrammers.filter((programmer)=> programmer.id !== idToDelete));
    }

    const handleChoose = (source) => {
        switch (source) {
            case "programmers": {
               setActiveSection(1);
                break;
            }
            case "tasks": {
                setActiveSection(2);
                break;
            }
            default: break;
        }
    };
    return (
        <div className="App">
            <PageContainer>
                <Navigation active={activeSection} onChoose={handleChoose}></Navigation>
                {activeSection === 1 && (
                    <>
                        <Programmers allProgrammers={listOfProgrammers} onDelete={handleDelete}/>
                        <ProgrammerForm allProgrammers={newProgrammer} onChange={handleChange}
                                 addProgrammer={handleAdd}></ProgrammerForm>
                    </>
                )}
                {activeSection === 2 && (<>
                    <h3>Úkol</h3>
                    <Tasks programmers={listOfProgrammers}></Tasks>
                </>)}
            </PageContainer>
        </div>
    );
}

export default App;
