import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 8wwyOGe7aH9P1nYmPxtubVGfIX3pLJQlmq_X4gQEESs",
    },
});