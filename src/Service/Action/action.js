import {ADD_BLOG} from '../constants'
import {DELETE_BLOG} from '../constants'
import {EDIT_BLOG} from '../constants'
export const addBlog =(data)=>{
   
    return {
        type:ADD_BLOG,
        data:data
    }
}
export const deleteBlog =(index)=>{

    return {
        type:DELETE_BLOG,
        data:index
       
    }
} 
export const editBlog =(data)=>{
   
    return {
        type:EDIT_BLOG,
        data:data
    }
}
 