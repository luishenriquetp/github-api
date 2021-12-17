import api from '../services/api'

export const getUser = async({setUser}) => {
    const response = await api.get('/users')
    return setUser (response.data)
}