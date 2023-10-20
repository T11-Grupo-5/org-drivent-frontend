import { styled } from "styled-components";
import HotelMold from "./HotelMold";
import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import { getAllHotels } from "../../services/hotelsApi";

export default function ChoiceHotel() {
    const [hotels, setHotels] = useState([]);
    const token = useToken(); 

    useEffect(() => {
        console.log('fetch hit')
        const hotels = []
        let promiseHotels = ''
        
        async function fetchHotels() {
            try {
                let response = await getAllHotels(token);
                //setHotels(response);
                response 
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
            return response
        }
    
        promiseHotels = fetchHotels();
        console.log(promiseHotels)
        console.log("debug")

        async function processHotels(hotels) {
            const hotelsWithRooms = []
            hotels.forEach(async (element) => {
                try {
                    //Classificar tipos de acomodação em single, double e triple
                    //Calcular vacancy total
                    // setHotels()
                    const response = await getHotelById(element.id)
                    hotelsWithRooms.push(response)
                    console.log("função nº 2")
                } catch (error) {
                    console.log("error")
                }
            });
           return hotelsWithRooms
        }

        processHotels(promiseHotels);
    }, []);

    console.log(hotels)
    console.log(hotels[0])

    return (
        <CsChoiceHotel>
            <h1>Primeiro, escolha seu hotel</h1>
            <div className="hotels">
                {
                    hotels.map((e, i) => <HotelMold 
                        key={`${e.name}${i}`}
                        name={e.name} 
                        image={e.image}
                        /* vacancy={e.vacancy} */
                    />)
                }
                {/* 
                <HotelMold/>
                <HotelMold/> */}
            </div>
        </CsChoiceHotel>
    );
}

const CsChoiceHotel = styled.div`
    border: 1px solid;
    *{
        border: 1px solid;
    }

    h1 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #8E8E8E;
    }

    .hotels{
        display: flex;
        flex-wrap: wrap;
    }

`;