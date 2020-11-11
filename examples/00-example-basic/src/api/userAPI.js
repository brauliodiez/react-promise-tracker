import { fetchWithDelay } from './fetch';
const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () =>{ 
try {
  const users =await fetchWithDelay(url);
  return users;
} catch(error){
  throw new Error(error);
}
}

export const userAPI = {
  fetchUsers,
};
