//this is my actions file.
import Types from './types';

export const addMe =(payload)=>{
    console.log('yes Khadija did like this video!');
    
    return {
        type: Types.addme,
        payload
    }
};