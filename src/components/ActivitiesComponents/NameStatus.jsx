import { styled } from "styled-components";

export default function NameStatus(props) {
    const {amountVacancy, statusActivitie} = props;
  return (
    <CsNameStatus>
        
          {statusActivitie === 'unavailable' ?
           'Esgotado'
          : statusActivitie === 'available' ? 
            `${amountVacancy} vagas`
          : statusActivitie === 'registered' ? 
            'Inscrito'
          : 'STATUS_ERROR'}
       
    </CsNameStatus>
  );
}

const CsNameStatus = styled.div`

`;