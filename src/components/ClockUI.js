import React from "react";

function ClockUI(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="show-hours">
                <h1 className="h1-top">{props.clockHours}</h1>
                <h1 className="h1-bottom">{props.clockHours}</h1>
            </div>
            <div className="show-minutes">
                <h1 className="h1-top">{props.clockMinutes}</h1>
                <h1 className="h1-bottom">{props.clockMinutes}</h1>
            </div>
            {/* <div className="show-seconds">
                <h1 className="h1-top">{props.clockSeconds}</h1>
                <h1 className="h1-bottom">{props.clockSeconds}</h1>
            </div> */}
        </div>
    )
}

export default ClockUI
