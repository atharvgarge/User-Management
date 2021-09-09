import axios from 'axios';

const USER_API_BASE_URL = "http://3.6.93.159:7883/machstatz/get_all_users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()