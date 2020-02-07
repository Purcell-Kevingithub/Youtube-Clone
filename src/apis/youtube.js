import axios from 'axios';

const KEY = "AIzaSyDXRGSQ5gd3q0YHHLspdbIEkRvdN3nsrb0";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});