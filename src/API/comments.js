import axios from 'axios';

export const fetchCommentsByPageNumber = number => {
  const start = number * 20;
  const end = start + 20;
  return axios({
    url: `https://jsonplaceholder.typicode.com/comments?_expand=post&_start=${start}&_end=${end}`,
    timeout: 5000,
    method: 'get',
    responseType: 'json',
    headers: {
      pageNumber: number,
    },
  });
};

export const dummy = null;
