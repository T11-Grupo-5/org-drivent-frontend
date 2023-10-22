import { styled } from "styled-components";
import HotelMold from "./HotelMold";
import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import { getAllHotels, getHotelById } from "../../services/hotelsApi";
import { getBookingsByRoomId } from "../../services/bookingApi";

export default function ChoiceHotel() {
    const [hotels, setHotels] = useState([]);
    const token = useToken();

    useEffect(() => {
        async function fetchHotels() {
            try {
                let response = await getAllHotels(token);
                // setHotels(response);
                return response;
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        }

        async function processHotels(hotels) {
            // Use Promise.all with map to process hotel data.
            const processedData = await Promise.all(hotels.map(async (e) => {
                try {
                    // Classify types of accommodation in single, double, and triple.
                    let roomTypes = {
                        Single: false,
                        Double: false,
                        Triple: false
                    }

                    const response = await getHotelById(e.id, token);
                    for (let i = 0; i < response.Rooms.length; i++) {
                        switch (response.Rooms[i].capacity) {
                            case 1:
                                roomTypes.Single = true;
                                break;
                            case 2:
                                roomTypes.Double = true;
                                break;
                            case 3:
                                roomTypes.Triple = true;
                                break;
                        }
                    }

                    function createRoomTypesString(roomTypes) {
                        let numberOfTypes = Object.values(roomTypes).reduce((sum, value) => {
                            if (value) {
                                return sum + 1;
                            }
                            return sum;
                        }, 0);

                        if (numberOfTypes === 1) {
                            if (roomTypes.Single) {
                                return 'Single';
                            } else if (roomTypes.Double) {
                                return 'Double';
                            } else if (roomTypes.Triple) {
                                return 'Triple';
                            }
                        } else if (numberOfTypes === 2) {
                            if (roomTypes.Single && roomTypes.Double) {
                                return 'Single e Double';
                            } else if (roomTypes.Single && roomTypes.Triple) {
                                return 'Single e Triple';
                            } else if (roomTypes.Double && roomTypes.Triple) {
                                return 'Double e Triple';
                            }
                        } else if (numberOfTypes === 3) {
                            return 'Single, Double e Triple';
                        }
                    }

                    e.acomodationTypes = createRoomTypesString(roomTypes);
                    e.Rooms = response.Rooms;

                    return e; // Return the modified element or the result of processing.
                } catch (error) {
                    console.error(error);
                    return e; // Return the unmodified element in case of an error.
                }
            }));

            setHotels(processedData);
            return processedData;
        }

        async function processVacancies(hotels) {
            // Use Promise.all with map to process hotel data.

            const processedData = await Promise.all(hotels.map(async h => {
                let vacancy = 0;

                const response = await Promise.all(h.Rooms.map(async r => {
                    vacancy += r.capacity;
                    try {
                        const response = await getBookingsByRoomId(r.id, token);
                        vacancy -= response.length;
                    } catch (err) {
                        console.error(err);
                    }
                }));
                
                h.vacancy = vacancy;
                return h
            }));

            setHotels(processedData);
            return processedData;
        }

        fetchHotels().then(e => processHotels(e)).then(f => processVacancies(f));
    }, []);

    return (
        <CsChoiceHotel>
            <h1>Primeiro, escolha seu hotel</h1>
            <div className="hotels">
                {
                    hotels.map((e, i) => <HotelMold
                        key={`${e.name}${i}`}
                        name={e.name}
                        image={e.image}
                        acomodationTypes={e.acomodationTypes}
                        vacancy={e.vacancy}
                    />)
                }
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