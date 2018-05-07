import axios from 'axios'; 
const ROOT_URL = `http://localhost:3001/auth`;

// export const FETCH_WEATHER = 'FETCH_WEATHER';


export async function verifyToken(token){
    const request = axios.get(ROOT_URL,{headers:{'Authorization':token}})
            return {
                type:'AUTH_USER',
                payload:request
            }

}