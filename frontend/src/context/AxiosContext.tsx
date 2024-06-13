import axios from 'axios';
import {IUser} from "../interfaces/IUser";

const baseURL = 'http://localhost:8080/vitamins'; // Emulator URL

const axiosContext = {
    async getUsers() {
        try {
            const response = await axios.get(`${baseURL}/getUser`);
            return response.data.map((user: any) => user as IUser);
        } catch (error: any) {
            throw new Error(`Fehler beim Abrufen der Users: ${error.message}`);
        }
    },
};

export default axiosContext;
