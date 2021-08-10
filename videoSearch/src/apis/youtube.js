import axios from 'axios';

const KEY = 'AIzaSyDmTON34eP8rIRLXR-6B6cvxgRu-2l-JHc';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});