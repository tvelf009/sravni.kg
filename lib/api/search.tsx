import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

interface getCreditData{
    amount: number;
    term: number;
    purpose: number;
    currrency: number;
}

const SearchAPI = {
    partners: () => 
        axios.get(`${SERVER_BASE_URL}/partners`),
    getCredits: (amount:number, term:number, purpose:number, currency:number) => 
        axios.get(`${SERVER_BASE_URL}/products/credits/search?amount=${amount}&term=${term}&purpose=${purpose}&currency=${currency}`),
    getCurrency: () =>
        axios.get("http://api.currencylayer.com/live?access_key=c7faf12f4f667ba22c3761eca18e5873&currencies=KGS,EUR,RUB"),
    offersPotreb: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=1`),
    offersAuto: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=2`),
    offersBusiness: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=3`),
    offersEduc: () =>
        axios.get(`${SERVER_BASE_URL}/products/credits/top?purpose=6`),
}


export default SearchAPI;