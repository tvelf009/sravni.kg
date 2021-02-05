import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";


const SearchAPI = {
    partners: () => 
        axios.get(`${SERVER_BASE_URL}/partners`),
    getCredits: (amount:number, term:number, purpose:number, currency:number) => 
        axios.get(`${SERVER_BASE_URL}/products/credits/search?amount=${amount}&term=${term}&purpose=${purpose}&currency=${currency}`),
    getCurrency: () =>
        axios.get(`${SERVER_BASE_URL}/exchange-rates`),
    offersPotreb: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=1`),
    offersAuto: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=2`),
    offersBusiness: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=3`),
    offersEduc: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=6`),
    getPartnerById: (partnerId:number) =>
        axios.get(`${SERVER_BASE_URL}/partners/${partnerId}`),
    getPartnerCredits: (partnerId:number) =>
        axios.get(`${SERVER_BASE_URL}/products/credits/bank/${partnerId}`),
}


export default SearchAPI;