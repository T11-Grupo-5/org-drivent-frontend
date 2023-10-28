import { styled } from "styled-components";
import IconStatus from './IconStatus';
import NameStatus from './NameStatus';

export default function StatusActivitie(props) {
    const { amountVacancy, statusActivitie } = props;
    return (
        <CsStatusActivitie
            borderColor={statusActivitie === 'registered' ? '#99E8A1' : '#CFCFCF'}
            textColor={statusActivitie === 'unavailable' ? '#CC6666' : '#078632'}
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
    border-left: 1px solid ${(p) => p.borderColor};

    color: ${(p) => p.textColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;