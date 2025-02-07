import "./HackathonCard.css"; // Import CSS file

interface Props{
    items: string[];
}
const HackathonCard = ({items=[]}: Props) => {

    items = ["DKI JAKARTA", "1000", "5", "05/02/2025", "IDR 100,000,000", "University"];
    return (
            <div className="hackathon-card">
                
                <div className="event-details">
                    <div className="event-image"></div>
                    <div className="event-details-description">
                        <div className="event-details-description-header">
                            <h5>EVENT DETAILS</h5>
                        </div>
                        <div className="event-details-description-body">
                            {items.length === 0 && "No items to display"}
                            {items.map((item, index) => (
                                <div key={index} className="event-details-description-body-item">
                                    {index===1 && <p>{"Location: " + item}</p>}
                                    {index===2 && <p>{"Max Participant: " + item}</p>}
                                    {index===3 && <p>{"Members per Team: " + item}</p>}
                                    {index===4 && <p>{"Registration Deadline: " + item}</p>}
                                    {index===5 && <p>{"Prize: " + item}</p>}
                                    {index===6 && <p>{"Level: " + item}</p>}
                                </div>
                            ))}
                            
                        </div>
                        
                    </div>
                </div>
                <div className="event-details-title-and-buttons">
                    <div className="event-details-title">
                        <h1>AMBATUWIN CUP</h1>
                        <h5>UNIVERSITAS INDONESIA</h5>
                    </div>
                    <div className="event-details-button">
                        <button className="event-details-icon-button">O</button>
                        <button className="event-details-text-button">VIEW DETAILS</button>
                    </div>
                </div>
                
            </div>
    );
}

export default HackathonCard;
