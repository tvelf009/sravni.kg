import axios from "axios";
import { CreditForm } from "../../src/interfaces/interface";
import { SERVER_BASE_URL } from "../utils/constant";


const SearchAPI = {
    partners: async() => 
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
    getCreditByBank: (token:any) =>
        axios.get(`${SERVER_BASE_URL}/products/credits`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }),
    getMyCredits: (token:any) =>
        axios.get(`${SERVER_BASE_URL}/applications/my`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }),
    createCredit: async (formData:any, token:string) => {
            const { data, status } = await axios.post(
              `${SERVER_BASE_URL}/products/credits`,
              JSON.stringify(formData),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            return {
              data,
              status,
            };
          },

    createApplication: async (formData:any, token:string) => {
            const { data, status } = await axios.post(
              `${SERVER_BASE_URL}/applications`,
              JSON.stringify(formData),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            return {
              data,
              status,
            };
          },
    getCreditById: async(id:number) => 
          axios.get(`${SERVER_BASE_URL}/products/credits${id}`),
    updateCredit: async(id:number, formData:CreditForm, token:string) => {
        const { data, status } = await axios.patch(
            `${SERVER_BASE_URL}/products/credits/${id}`,
                JSON.stringify(formData),
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            return{
                data,
                status
            }
    }
          
}


export default SearchAPI;