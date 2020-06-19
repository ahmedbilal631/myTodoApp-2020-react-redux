import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import MySlider from '../Header/Slider/slider';
import Footer from '../Footer/Main_Footer/footer';
import SubFooter from '../Footer/Sub_Footer';
// import Post from '../AddPost/post';
import './home.css';

import Slide_Pic_2 from '../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../media/slider/slide_pic_3.jpg';
import Slide_Pic_4 from '../../media/slider/slide_pic_4.jpg';
import Slide_Pic_5 from '../../media/slider/slide_pic_5.jpg';




import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
import { set_posts } from '../../redux/actions/postAction/post_actions';


class Home extends Component {
    constructor(){
        super();
        this.state ={
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: '',
            accounts: []
    }}

    componentDidMount(){
        window.jQuery(document).ready(function(){
            window.jQuery('.parallax').parallax();})
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.accounts,"next props")
        this.setState({
            accounts : nextProps.accounts
        })    
    }


    adder=()=>{
    console.log(this.state);
    let getStateData = this.state;
    // let account_data = 
    // console.log(account_data);
    
    
        this.props.addUser(
            {
                name: getStateData.new_name,
                email: getStateData.new_email,
                number: getStateData.new_number,
                country: '',
                profile_pic: getStateData.new_profile_pic,
                password: getStateData.new_password
            }
        );
        this.setState({
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: ''
        });
    }
    render() {
      let get_posts = this.props.posts;
      console.log(get_posts, 'get post');
      let your_posts = get_posts.filter((item)=> item.post_creator_email == "abc@abc.abc");
      console.log(your_posts, 'your post');
//recent post array.
      let recent_posts = [];

      //to extract interest related posts
      let posts_array_length = get_posts.length;

      //to get higher rank id
      let higher_id = 1000;
      for(let i = 0; i<posts_array_length; i = i+1){
        if(get_posts[i].post_id > higher_id){
          higher_id = get_posts[i].post_id;
          console.log(higher_id, ' loop higher id');  
        }
      }
      //................................................      
      //with indexing of recent posts
      // const index = state.findIndex((item)=>{return item.id === action.payload.id});
      let max_post = 4;
      if((posts_array_length -1) >= 4){
        for(let k = 0; k<max_post; k++){
          const target_index =get_posts.findIndex((item) => { return item.post_id == higher_id});
          if(target_index != -1){
            // console.log(target_index, '+ve');
            recent_posts.push(get_posts[target_index]);
            higher_id = higher_id - 1;
          }else{
            // console.log(target_index, '-ve');
            k= k -1;
            higher_id = higher_id - 1;
          }
        }
      }else{
        for(let k = 0; k<=(posts_array_length-1); k++){
          const target_index =get_posts.findIndex((item) => { return item.post_id == higher_id});
          if(target_index != -1){
            recent_posts.push(get_posts[target_index]);
            higher_id = higher_id - 1;
          }else{
            higher_id = higher_id - 1;
          }
        }
      }
      console.log(recent_posts, 'for recent posts loop'); 
      //...............................................................
      
      //all post max display function
      // let target_post_index = Math.round(Math.random() * (posts_array_length -1));
      let all_posts = [];
      let target_post_index = 0;
      let previous_index = 0; //for retendancy test
      let previous_index_arr = [0]; //for retendancy test
      // let previous_indexX = 0; //for retendancy test
      if(posts_array_length >= max_post){
        for(let i = 0; i<max_post; i++){
          target_post_index =  Math.round(Math.random() * (posts_array_length -1));
          console.log('current target', target_post_index);
          let temp_arr = previous_index_arr.filter((item)=> item == target_post_index);
          previous_index = temp_arr[temp_arr.length - 1];
          temp_arr= [];
          console.log('current previous', previous_index, 'and temp', temp_arr);
            if(target_post_index != previous_index){
            // if(target_post_index != previous_index[n]){
              console.log('random indexes', target_post_index, posts_array_length-1);
              all_posts.push(get_posts[target_post_index]);
              previous_index_arr.push(target_post_index);
              // previous_indexX= target_post_index;
              console.log('previous', previous_index_arr);                        
            }else{
              console.log(target_post_index, '-ve');
              i = i - 1;
            }
          }
      }else{
        all_posts = get_posts;
      }
      console.log('all posts', all_posts);
      





        //time identity in a post
        let yr = new Date().getFullYear().toString();
        let dt = new Date().getMonth().toString();
        let mn = new Date().getDate().toString();
        let hr = new Date().getHours().toString();
        let min = new Date().getMinutes().toString();
        let get_time = yr+dt+mn+hr+min;

        get_time= Number(get_time);
        // console.log(get_time, 'form home');
        
        //..................................................................


        return (
              <div className='mXi'>
                <NavBar />
                <div className="myHomeBodyX">
                <MySlider/>
                    </div>
                <div className="section white">
      <div className="row container">
        <h2 className="header">Lets Find</h2>
        <p className="grey-text text-darken-3 lighten-3">
            You are welcome to Lets Find platform. We are present to here to help you always. 
            Lets find is a platform, where you can find your lost persons. This app can help you a lot in tracing your lost ones.</p>
      </div>
    </div>
      <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_5} alt="kjdsnf" /></div>
    </div>
    <div className="section white">
      <div className="row container">
        <h2 className="header">Recent Posts</h2>
        <div className='row'>
          {recent_posts.map((item, index)=>(
            <div className="col s12 m6 l6 xl3" key={item.post_id}>
                  <div className="card sticky-action">
                              <div className="card-image waves-effect waves-block waves-light">
                             <img className="activator" src={item.dp_image} alt="images/office.jpg" />
                             </div>
                             <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>
                   <div><span>Address : {item.location}</span> <span> , {item.country}</span></div>
           
                             <p><a href="#">This is a link</a></p>
                             </div>
               
                             <div className="card-action">.Here the actions btns..</div>
           
                            <div className="card-reveal">
                   <span className="card-title grey-text text-darken-4">{item.name} - Details<i className="material-icons right">close</i></span>
                   <p>{item.description} - Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col s12 m12 l12 xl12">
            <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.props.set_posts({interest: 'recent'}); console.log("call for all posts");
          }}>View all</button>
          </Link>
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
        <div>
          {/* <Post /> */}
        </div>
      </div>
    </div>
    <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_4} alt='asfjksl' /></div>
    </div>
    <div className="section white">
      <div className="row container">
        <h2 className="header">Your Posts</h2>
        <div className='row'>
          {your_posts.map((item, index)=>(
            <div className="col s12 m6 l6 xl3" key={item.post_id}>
                  <div className="card sticky-action" >
                              <div className="card-image waves-effect waves-block waves-light">
                             <img className="activator" src={item.dp_image} alt="images/office.jpg" />
                             </div>
                             <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>
                   <div><span>Address : {item.location}</span> <span> , {item.country}</span></div>
           
                             <p><a href="#">This is a link</a></p>
                             </div>             
                             <div className="card-action">.Here the actions btns..</div>
                            <div className="card-reveal">
                   <span className="card-title grey-text text-darken-4">{item.name} - Details<i className="material-icons right">close</i></span>
                   <p>{item.description} - Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.props.set_posts({interest: 'your'}); console.log("call for all posts");
          }}>View all</button>
          </Link>
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
      <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_3} alt='asfjksl' /></div>
    </div>
    <div className="section white">
      <div className="row container">
        <h2 className="header">All Posts</h2>
        <div className='row'>
          {all_posts.map((item, index)=>(
            <div className="col s12 m6 l6 xl3" key={item.post_id}>
                  <div className="card sticky-action" >
                              <div className="card-image waves-effect waves-block waves-light">
                             <img className="activator" src={item.dp_image} alt="images/office.jpg" />
                             </div>
                             <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>
                   <div><span>Address : {item.location}</span> <span> , {item.country}</span></div>
           
                             <p><a href="#">This is a link</a></p>
                             </div>
               
                             <div className="card-action">.Here the actions btns..</div>
           
                            <div className="card-reveal">
                   <span className="card-title grey-text text-darken-4">{item.name} - Details<i className="material-icons right">close</i></span>
                   <p>{item.description} - Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.props.set_posts({interest: 'all'}); console.log("call for all posts");
          }}>View all</button>
          </Link>
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3">
          Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
      </div>
      <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_2} alt='asfjksl' /></div>
    </div>
    </div>

                    <Footer />
                    <SubFooter />
                </div>
                  
        )
    }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        posts: state.posts
    }
};

export default connect(mapStateToProps, {set_posts})(Home);