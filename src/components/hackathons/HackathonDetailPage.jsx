function HackathonDetailPage({ hackathon }) {
    if(!hackathon){
        return <p>Aucun hackathon pour le moment !</p>;
    }
    return <>
        <h2>{hackathon.name}</h2>
        Adresse :{hackathon.location}<br/>
        Date: {hackathon.date}
    </>   
}

export default HackathonDetailPage;