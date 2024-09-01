import React from "react"
import "./Location.css"
const Location = () => {
    return(
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-2 padding-right">
                        <p className="info-text text-green">
                            Nestled in the heart of Luxembourg, our luxury hotel offers an unparalleled blend of elegance, comfort, and 
                            sophistication, designed for the discerning traveler. Each room and suite is a haven of opulence, featuring panoramic views of the charming cityscape and 
                            lush green landscapes, adorned with bespoke furnishings and plush amenities. </p>
                        <p className="info-text text-green">
                            Whether you're here for business or leisure, our dedicated concierge service is 
                            Experience the epitome of luxury and European charm in the vibrant city of Luxembourg.</p>
                    </div>
                    <div className="col-2 image"></div>
                </div>
            </div>
        </div>
    )
}

export default Location