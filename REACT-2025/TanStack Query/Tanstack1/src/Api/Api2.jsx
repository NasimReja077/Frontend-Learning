// import axios from "axios";
// const api = axios.create({
//      baseURL: "https://jsonplaceholder.typicode.com",
// });

// export const fetchPostsData = () =>{
//      return api.get("/posts");
// };


import axios from "axios";
const api = axios.create({
     baseURL: "https://jsonplaceholder.typicode.com",
});

// export const fetchPostsData = async () =>{
//      const res = await api.get("/posts");
//      return res.status === 200 ? res.data : [];
// };

export const fetchPostsData = async () =>{
     try {
          const res = await api.get("/posts?_start=0&_limit=32");
          return res.status === 200 ? res.data : [];
     } catch (error) {
          console.log(error);
     }
};



