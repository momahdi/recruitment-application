import axios from "axios";
  export default class ApiCall{
        constructor(){

        }
        
        apiAxios() {
          return axios.create({
            baseURL: "http://localhost:3010/",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        }

      }
      