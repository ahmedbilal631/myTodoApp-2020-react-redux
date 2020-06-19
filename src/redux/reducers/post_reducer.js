//here we will again import the actions type file again
import types from '../actions/postAction/post_types';

import Dummy_Profile from '../../media/dummy_profile.jpg';
//here a dumy id data for testing
import Dummy_State from './dummy_posts';

//reducer starts here
export default (state=Dummy_State, action)=>{
    switch(action.type){

      //...............................Add post............................
        case types.add_post:
            console.log('yes Add post call');
            return state=[
                ...state,
                
                  // id: Math.floor(Math.random() * 1000),
                //   completed: false,
                 action.payload,
                ];
  
              //..............................................Update...............  
          case types.update_post:
          console.log('update post from reducer', action.payload);
          let _id = action.payload.id;
          // const index = state.findIndex((item)=>{return item.user_id === _id});
          state = state.filter((item)=> item.id != _id);
          state.push(action.payload);
          console.log('after update', state); 
          return state;
          
          //.............................Delete post................................
          case types.del_post:
            console.log('delet post from post-reducer', action.payload);
            // let _id = action.payload.id;
            state = state.filter((item)=> item.id != action.payload.id);
            console.log('after delete', state); 
            return state;
          //......................All posts........................................
          case types.set_posts:
            console.log('you sent posts setting request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', action.payload.interest);
            return state;
            //......................All posts........................................
          case types.all_posts:
            console.log('you sent all post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'all');
            return state;

          //.............................Recent posts............................
          case types.recent_posts:
            console.log('you sent recent post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'recent');
            return state;
          //...............................Your post............................
          case types.your_posts:
            console.log('you sent your post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'your');
            return state;       

          //............................Load data............................
        case types.loadData:
          console.log(" data is loading," + state);
          return state;



        default:
            return state;
            }}