import { getDefaultEmail, getDefaultPassword } from "../utils/constants.js";

const instance = axios.create({
    baseURL: 'https://ajax.test-danit.com/api/v2/cards'
})

export const getDefaultToken = async () => {
    const defaultEmail = getDefaultEmail();
    const defaultPassword = getDefaultPassword();
  
    try {
      const response = await instance.post('/login', {
        email: defaultEmail,
        password: defaultPassword
      });
      const token = response.data; 
      return token;
    } catch (error) {
      console.error('Error fetching token:', error);
      return null; 
    }
  };

  export const getAllCards = async (token) => {
    try {
      const response = await instance.get('/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      return null;
    }
  };

export const createCard = async () => {};
export const deleteCard = async () => {};
export const changeCard = async () => {};