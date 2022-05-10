
import axios from "axios";


export const instance=axios.create({

    baseURL:"https://quotable.io/"
})


export const tagUrl=axios.create({


    baseURL:"https://quotable.io/quotes?tags="
})