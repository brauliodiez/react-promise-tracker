import { fetchWithDelay } from './fetch';
const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async () => {
try {
        const posts = await fetchWithDealy(url);
        const slicedPosts = posts.slice(0, 10);
        return slicedPosts
      } catch (error) {
        throw new Error(error);
      }
}

export const postAPI = {
  fetchPosts,
};
