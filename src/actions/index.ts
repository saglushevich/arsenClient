import axios from "axios"

export const makeOrder = async (order: any) => {
    try {
        const response = await axios.post(`https://diplom-e-commerce-server.onrender.com/api/auth/makeOrder`, order)

        return response.data.user;
    } catch (error) {
        console.log(error)
        return false
    }
}