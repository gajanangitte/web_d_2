import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID GYdeAKVIvlkI-rPe_ZPTl-Kocm5SjBKv9VUv-CE__gs',
    }
})