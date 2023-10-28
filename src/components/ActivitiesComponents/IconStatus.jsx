import { styled } from "styled-components";

export default function IconStatus(props) {
    const {statusActivitie} = props;
  return (
    <CsIconStatus>
        
          {statusActivitie === 'unavailable' ? (
            <ion-icon name="close-circle-outline"></ion-icon>
          ) : statusActivitie === 'available' ? (
            <ion-icon name="enter-outline"></ion-icon>
          ) : statusActivitie === 'registered' ? (
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          ) : (
            'STATUS_ERROR'
          )}
        
    </CsIconStatus>
  );
}

const CsIconStatus = styled.div`
   font-size: 18px;

`;