import { 
    FETCH_DATA 
} from './types';
import axios from 'axios';

export function fetchData(){
    const API_KEY = 'zfDJ72Lozxb1HfsYrknVKP0BIZ9J9WbtNOFYM2IB' 
    const request = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`);

    return {
        type: FETCH_DATA,
        payload: request
    };
}