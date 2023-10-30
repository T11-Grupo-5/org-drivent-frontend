import { styled } from "styled-components";
import IconStatus from './IconStatus';
import NameStatus from './NameStatus';
import { activitiesServices } from "../../services/activitiesApi";
import { useContext } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";
import dayjs from "dayjs";



export default function StatusActivitie(props) {
    const { amountVacancy, statusActivitie, activityId, token, activities } = props;
    const { setDay, dayId, activitiesHours } = useContext(ActivityContext);
    async function setEnrollment() {

        if(statusActivitie === 'available') {
            await activitiesServices.setEnrollment(token, activityId)
            const activities = await activitiesServices.getActivitiesByDayId(token, dayId);
            setDay(activities);
        }        
    }

    return (
        <CsStatusActivitie
            bordercolor={statusActivitie === 'registered' ? '#99E8A1' : '#CFCFCF'}
            textcolor={statusActivitie === 'unavailable' ? '#CC6666' : '#078632'}
            statusactivitie={statusActivitie === 'unavailable' ? 'default' : 'pointer'}
            onClick={() => setEnrollment()}
        >
            <IconStatus
                statusActivitie={statusActivitie}
            />
            <NameStatus
                statusActivitie={statusActivitie}
                amountVacancy={amountVacancy}
            />
        </CsStatusActivitie>
    );
}

const CsStatusActivitie = styled.div`
    height: 100%;
    width: 25%;
    border-left: 1px solid ${(p) => p.bordercolor};
    color: ${(p) => p.textcolor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: ${(p) => p.statusactivitie}
`;