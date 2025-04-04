import { isAxiosError } from "axios"

export const handleActionError = (error: unknown) => {

    if( isAxiosError(error) ){
        console.log(error.response?.data)
        return {
            data: null,
            error: error.response?.data.message
        }
    }
    
    console.log(error)
    
    return {
        data: null,
        error: "Revise los logs del sistema"
    }
}