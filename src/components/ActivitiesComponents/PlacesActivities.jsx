import { styled } from "styled-components";
import MoldPlaces from "./MoldPlaces";
import { useContext, useState } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";

export default function PlacesActivities() {

    const [places, setPlaces] = useState([{ name: 'Auditório Principal', activities: {
        "id": 1,
        "name": "Aula de C++",
        "capacity": 2,
        "startTime": "2023-10-26T09:00:00.145Z",
        "endTime": "2023-10-26T11:14:05.145Z",
        "halllId": 1,
        "createdAt": "2023-10-26T19:14:05.145Z",
        "updatedAt": "2023-10-26T19:06:42.803Z",
        "Users": [
          {
            "id": 1
          }
        ]
      }},
     { name: 'Auditório Lateral', activities: {
        "id": 2,
        "name": "Aula de dajdawuodaw",
        "capacity": 18,
        "startTime": "1970-01-01T10:00:00.000Z",
        "endTime": "1970-01-01T11:21:00.000Z",
        "halllId": 1,
        "createdAt": "2023-10-26T19:14:05.145Z",
        "updatedAt": "2023-10-26T19:06:42.803Z",
        "Users": [
          {
            "id": 1
          }
        ]
      } },
     { name: 'Sala de Workshop', activities: {
        "id": 3,
        "name": "Aula de pyhton",
        "capacity": 8,
        "startTime": "1970-01-01T11:00:00.000Z",
        "endTime": "1970-01-01T12:00:00.000Z",
        "halllId": 1,
        "createdAt": "2023-10-26T19:14:05.145Z",
        "updatedAt": "2023-10-26T19:06:42.803Z",
        "Users": [
          {
            "id": 1
          }
        ]
      } }]);

    const { day } = useContext(ActivityContext);

    return (
        <CsPlacesActivities>
            {
                places.map((place, index) =>
                    <MoldPlaces key={index} placeName={place.name} activities={place.activities}/>
                )
            }
        </CsPlacesActivities>
    );
}

const CsPlacesActivities = styled.div`
    display: flex;
    //border-bottom: 5px solid red;
`;