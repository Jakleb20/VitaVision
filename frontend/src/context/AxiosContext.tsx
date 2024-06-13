import axios from 'axios';
import {IUser} from "../models/IUser";


let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/vitamins/getUser',
    headers: { }
};

const axiosContext = {
    async getUsers() {
        try {
            let users: IUser[] = [];

            // axios.request(config) .then((response) => {response.data.map((user: IUser) => (users.push(user)))});
            axios.request(config) .then((response) => {response.data.map((user: IUser) => (console.log()))});
                    
            return users;
        } catch (error:any) {
            throw new Error(`Fehler beim Abrufen der User: ${error.message}`);
        }
    },

};

export default axiosContext;
