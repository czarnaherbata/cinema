
import axios from 'axios'



//const axios=require('axios')


export const createMovie=async(title, year, duration)=>{
    return await axios.post('http://localhost:4000/movies',
    {
        title: title,
        year: year,
        duration: duration,
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}



export const titleAsMovie=async(title, year, duration)=>{
    return await axios.get('http://localhost:4000/movies?',
    {
        params:{
            title:title,
            year:year,
            duration:duration
        }
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
}