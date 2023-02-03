import axios from 'axios'

export const getFigmaApi = () =>
    axios.create({
        baseURL: 'https://api.figma.com/v1',
    })
