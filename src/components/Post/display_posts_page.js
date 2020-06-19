//display posts page

import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import './addPostStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
// import {addUser, loadData, updateUser} from '../../redux/actions/UserAction/index';
import Dp_Replacement from '../../media/dp_replacement.png'


class Display_Posts extends Component {
    constructor(){
        super();
        this.state ={
            edit: false,
            isEmpty: false,
            re_enter: false,            
                name : '',
                fname: '',
                gender:'',
                cnic: '',
                email: '',
                number:'',
                address:'',
                country:'',
                password:'',
                dp_image: '',

                posts: [],

            // recievedUsers: this.props.recievedUsers,
    }
    console.log(this.state, 'from construct');    
}


    componentDidMount(){
        //here will be post loaders
        }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.posts,"next props")
        this.setState({
            posts : nextProps.posts
        })    
    }
    //...................................

    render() {
        //...................................................
        //posts interest selection
        let posts_interest = localStorage.getItem('display_posts_setting');
        //getting all the post from store
        let get_posts  = this.props.posts;
        console.log(posts_interest,get_posts);

        //.....................................................
        //to get Your Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_posts = get_posts.filter((item)=> item.post_creator_email == "abc@abc.abc");
        console.log(your_posts, 'your post');
        //...................................................
        //to get Your active Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_active_posts = get_posts.filter((item)=> item.post_creator_email == "abc@abc.abc" && item.post_status == 'active');
        console.log(your_active_posts, 'your post');
        //...................................................
        //to get Your Resolved Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_resolved_posts = get_posts.filter((item)=> item.post_creator_email == "abc@abc.abc");
         your_resolved_posts = get_posts.filter((item)=> item.post_status == "resolved");
        console.log(your_resolved_posts, 'your resolved post');
        //...................................................
        //functions for recent posts order
        //recent post array
      let recent_posts = [];
      //to extract interest related posts
      let posts_array_length = get_posts.length-1;
      //to get higher rank id
      let higher_id = 1000;
      for(let i = 0; i<=posts_array_length; i = i+1){
        //   for(let j = 1; j<= posts_array_length; j++){
        //       if(get_posts[j]>get_posts[i]){
        //         recent_posts.push(get_posts[j]);
        //     }
        //     else{
        //         recent_posts.push(get_posts[i]);
        //       }
        //   }

        if(get_posts[i].post_id > higher_id){
          higher_id = get_posts[i].post_id;
          console.log(higher_id, ' loop higher id');  
        }
      }
        for(let k = 0; k<=posts_array_length; k++){
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
      console.log(recent_posts, 'for recent posts loop'); 
      //...............................................................
      //................................................

        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    
                        {posts_interest == 'recent'? <p className="myPageTitle">RECENT</p>: posts_interest == 'your'?<p className="myPageTitle">YOUR POSTS</p>:<p className="myPageTitle">ALL POSTS</p>}
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl10">
                            <div className="row">
                            {posts_interest == 'recent'? recent_posts.length != -1?                           
                            recent_posts.map((item, index)=>(
                            <div className="col s12 m6 l6 xl3" key={item.post_id}>
                             <div className="card sticky-action">

                             <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>         
                             </div>
                              <div className="card-image waves-effect waves-block waves-light">
                             <img className="activator" src={item.dp_image} alt="images/office.jpg" />
                             </div>
                             <div className="card-content">
                             <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>
                            <div><span>Address : {item.location}</span> <span> , {item.country}</span></div>
           
                             <p><a href="#">This is a link</a></p>
                             </div>
               
                             <div className="myCardBtnSec card-content">
                             
                                 
                                 <i className="material-icons left">lock</i>
                                 <i className="material-icons right">share</i>
                                                                
                                </div>
           
                            <div className="card-reveal">
                   <span className="card-title grey-text text-darken-4">{item.name} - Details<i className="material-icons right">close</i></span>
                   <p>{item.description} - Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                            </div>
            </div>
          ))
          :
          <div className="col s12 m12 l12 xl12">
              Sorry, There is no post to display.
          </div>
        :posts_interest == 'your'?your_posts.length != -1?
        your_posts.map((item, index)=>(
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
            ))
            :
            <div className="col s12 m12 l12 xl12">
                Sorry, You have no post yet.
            </div>
            :get_posts.length != -1?
            get_posts.map((item, index)=>(
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
            ))
            :
            <div className="col s12 m12 l12 xl12">
                Sorry, There is no post to display.
            </div>
        }

                                posts will be here
                            </div>
                        </div>
                        <div className="col s12 m4 l4 xl2">
                            <div className="mySideLinksTitle">
                                Futher
                            </div>
                            <div className="mySideLinksList">
                                <ul>
                                    <li><Link to='#your_posts'>Your posts</Link></li>
                                    <li><Link to='#follow_up'>Follow up</Link></li>
                                    <li><Link to='#notifications'>Notifications</Link></li>
                                    <li><Link to='#settings'>Settings</Link></li>
                                    <li><Link to='#help'>Help?</Link></li>
                                    <li><Link to='#logout'>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
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

export default connect(mapStateToProps, null)(Display_Posts);