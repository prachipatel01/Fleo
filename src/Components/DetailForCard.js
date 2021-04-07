import React from 'react'
import '../CSS/DetailForCard.css';
function DetailForCard({item}) {
    let success="";
    let reason="";
    if(item.launch_success){
        success=<p>Launched successfull!</p>;
    }else{
        success=<p>Launched Failure!</p>;
        reason=<p>{item.launch_failure_details.reason}</p>;
    }
    return (
        <div className="Card">
            <p>rocket: {item.rocket.rocket_name}</p>
            <p>rocket type: {item.rocket.rocket_type}</p>
            {success}
            {reason}
            <p>Launch Loaction: {item.launch_date_local}</p>
            <p>Launch Date: {item.launch_date_utc}</p>
        </div>
    )
}

export default DetailForCard
