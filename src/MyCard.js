import React from "react"
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";


const MyCard = ({details}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img 
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large} 
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span className="pr-2">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt className="mr-2" />
                    {details.location?.city}
                </CardText>
                <CardText>
                    <FaPhone className="mr-2" />
                    {details.phone}
                </CardText>
                <CardText>
                    <FaEnvelope className="mr-2" />
                    {details.email}
                </CardText>
                <CardText>
                    <p>Age: {details.dob?.age}</p>
                    
                </CardText>
                
               
            </CardBody>
        </Card>
    )
}

export default MyCard;