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


// to delete the post

export const deletPost = (id) =>{
     return api.delete(`/posts/${id}`);
};

// to update the post
export const updatePost = (id) =>{
     return api.patch(`/posts/${id}`, { title: "I have updated"});
}

// Infinity Scroll
export const fetchScUsers = async({ pageParam = 1 })=>{
     try {
          const res = await axios.get(
               `https://api.github.com/users?per_page=10&page=${pageParam}`
          );
          return res.data;
     } catch (error) {
          console.log(error)
     }
}