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

export const fetchPostsData = async (pageNumber) =>{ // pageNumber is parameter 
     try {
          // const res = await api.get("/posts?_start=0&_limit=32");
          const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`); // dynamic pagination
          return res.status === 200 ? res.data : [];
     } catch (error) {
          console.log(error);
     }
};


// to fetch the individual data

export const fetchInvPost = async (id) =>{
     try {
          const res = await api.get(`/posts/${id}`);
          return res.status === 200 ? res.data : [];
     } catch (error) {
          console.log(error)
     }
}

