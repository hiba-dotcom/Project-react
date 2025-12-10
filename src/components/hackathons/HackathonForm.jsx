import { useEffect } from "react";

function HackathonForm({name,location,date,setName, setLocation, setDate, enregistrer, initialValues}){
if(!initialValues) {
    initialValues = {name: "", location: "", date: ""};
}
useEffect(() => {
    if(initialValues) {
        //eslint-disable-next-line react-hooks/set-state-in-effect
        setName(initialValues.name || "");
        setLocation(initialValues.location || "");
        setDate(initialValues.date || "");
    }
    
}, [initialValues]);


const handleSubmit = (event) => {
    event.preventDefault();
    enregistrer({name,location,date});
    if(!initialValues) {
        setName("");
        setLocation("");
        setDate("");
    }
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Nom du hackathon</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
            <label>Lieu</label>
            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </div>
        <div>
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>
    </form>
)
}