import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
// import './editProfileStyle.css';

import {Link} from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';



import {connect} from 'react-redux';
import {add_post, update_post} from '../../redux/actions/postAction/post_actions';
import Dp_Replacement from '../../media/dp_replacement.png'


class Add_post extends Component {
    constructor(){
        super();
        this.state ={
            edit: false,
            isEmpty: false,
            re_enter: false,            
                name : '',
                status: '',
                gender:'',
                age_group: '',
                disability: '',
                location:'',
                country:'',
                region: '',
                description:'',
                resloved: false,
                // password:'',
                dp_image: '',
                post_time: '',

            // recievedUsers: this.props.recievedUsers,
    }
    // console.log(this.state, 'from construct');    
}

//...................................................


    componentDidMount(){
        // this.loadAcc();
        // this.props.loadData();
        // console.log(this.props, 'from did mount');
    }


    //...................................
        //status control
        handleStatusChange=event=>{
            let textX = this.state.status;
            textX = event.target.value
            // console.log(textX, 'yes status change');
            this.setState({
                status: textX
            });
        }
        //...........................................
    //name editing
    handleNameChange=event=>{

        let textX = this.state.name;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            name: textX
            // name: textX.name
        });
    }

    //............................................

        //gender editing control
        handleGenderChange=event=>{
            let textX = this.state.gender;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                gender: textX
            });
        }
    
        //...........................................
        //email editing control
        handleAgeChange=event=>{
        let textX = this.state.age_group;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            age_group: textX
        });
    }
    //...........................................
        //address editing control
        handleLocationChange=event=>{
            let textX = this.state.location;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                location: textX
            });
        }    
        //...........................................
            //disability  control
    handleDisabilityChange=event=>{
        let textX = this.state.disability;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            disability: textX
        });
    }
    //...........................................
         //Country editing control
    //     handleCountryChange=event=>{
    //     let textX = this.state.country;
    //     textX = event.target.value
    //     // console.log(textX);
    //     this.setState({
    //         country: textX
    //     });
    // }
    //...........................................
    //country selector
    selectCountry (val) {
        this.setState({ country: val });
      }
      //........................................
      //Region selector
      selectRegion (val) {
        this.setState({ region: val });
      }
      //........................................
        //number editing control
        handleNumberChange=event=>{
            let textX = this.state.number;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                number: textX
            });
        }
        //...........................................
          //description editing control
          handleDescriptionChange=event=>{
            let textX = this.state.description;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                description: textX
            });
        }
        //...........................................
        //email editing control
        handleImgChange=event=>{
            let textX = this.state.dp_image;
            textX = event.target.value
            console.log(textX, 'image path');
            this.setState({
                dp_image: textX
            });
        }   
        //...........................................
    //state checker before update
    Checker=(acc, old_posts, old_notifications)=>{
        let captureState = this.state;

        if(captureState.dp_image === ''){
            captureState.dp_image = acc.dp_image;}
        if(captureState.name === ''){
            alert('name is empty');
            }
            else if(captureState.age_group === ''){
                alert('plz select an age group');
                }
                else if(captureState.status === ''){
                alert('Please select status');
                }
                    else if(captureState.gender === ''){
                        alert('Please select a gender');
                        }
                        else if(captureState.disability === ''){
                            alert('Please identify any disability?');
                            }
                                else if(captureState.location === ''){
                                    alert('Kindly enter a location address.');
                                    }
                                    else if(captureState.country === ''){
                                        alert('Please make sure country name.')}
                                        else{
                                            this.AddNow(old_posts, old_notifications);
                                          }
                                        
                                            
    }
    //..............................................
    //add function
    AddNow=(old_posts, old_notifications)=>{
        // console.log('id recieved', acc.user_id);
     
        //to get highest post id from old posts state
        
        let posts_array_length = old_posts.length-1;
        let notifications_array_length = old_notifications.length-1;
        //to get higher rank id
        let higher_id_posts = 1000;
        for(let i = 0; i<=posts_array_length; i = i+1){  
            if(old_posts[i].post_id > higher_id_posts){
                higher_id_posts = old_posts[i].post_id;
            }
        }
        let higher_id_notification = 1000;
    for(let i = 0; i<=notifications_array_length; i = i+1){  
        if(old_notifications[i].notification_id > higher_id_notification){
          higher_id_notification = old_notifications[i].notification_id;
      }
  }
    //   console.log(higher_id_posts, ' add post higher id old array');  
    //   console.log(higher_id_notification, ' add notification higher id old array');  
     
        //time identity in a post
      let yr = new Date().getFullYear();
      let mn = new Date().getMonth();
      let dt = new Date().getDate();
      let hr = new Date().getHours().toString();
      let min = new Date().getMinutes().toString();
      let get_time =Number( yr.toString()+(mn + 1).toString()+dt.toString());
      console.log(get_time, 'form time number add_post');
      this.setState({
          post_time: get_time
      })
      //.........................................
        // console.log(this.state, 'state from add post');
        
            this.props.add_post({
                post: {
                post_id: higher_id_posts + 1,
                name : this.state.name,
                status: this.state.status,
                gender: this.state.gender,
                age_group: this.state.age_group,
                disability: this.state.disability,
                location: this.state.location,
                country: this.state.country,
                region: this.state.region,
                description: this.state.description,
                dp_image: this.state.dp_image,
                post_time: this.state.post_time,
                post_creator_email: this.props.user.email,
                post_creator_name: this.props.user.name,
                post_status: 'active', //active , in_active, resolved
                post_time: {
                    // month-year
                    date: dt, //0-30
                    month: mn + 1, //0-11
                    year: yr, //0-now
                },
                follwed_by: []
            },
        notification: {
            notification_id: higher_id_notification +1,
            post_id: higher_id_posts + 1,
            post_creator_id: this.props.user.user_id,
            notification_date: get_time,
        }})
            this.setState({
                edit: false,
                isEmpty: false,
                re_enter: false,            
                    name : '',
                    status: '',
                    gender:'',
                    // number: '',
                    age_group: '',
                    disability: '',
                    location:'',
                    country:'',
                    region: '',
                    description:'',
                    resloved: false,
                    // password:'',
                    dp_image: '',
            });
        
    }
        //...............................................
        //Re-enter function

    render() {
        let acc = this.props.posts.posts[0];
        let posts_state = this.props.posts.posts;
        let notifications_state = this.props.posts.notifications;
        // console.log(posts_state, 'current store');
        let local_posts = JSON.parse(localStorage.getItem('posts_state'));
        // console.log('from local storage', local_posts);
        
        const { country, region,
            name,
            status,
            gender,
            // number: '',
            age_group,
            disability,
            location,
            description,
        dp_image } = this.state;

//to get





        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    <p className="myPageTitle">
                        NEW POST
                    </p>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl10">
                            <div>

                            <table>
                                    {/* {this.state.isEmpty?
                                    <tr>
                                    <td className='myProfileItemTitle'>Name</td>
                                    <td className='myProfileItemEmptyTxt'>You enter no new name?</td>    
                                    <td>
                                        <button onClick={()=>{this.setState({re_enter: true})}} className="btn red">Re-enter</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{this.setState({re_enter: false, isEmpty: false})}} className="btn red" >Ignore</button>
                                    </td>
                                    </tr>
                                    : */}

                                    {/* } */}
                                    <tr>
                                    <td className='myProfileItemTitle'>Status</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleStatusChange}>
                                      <option value={status} disabled selected>Choose your option</option>
                                      <option value="missing">Missing</option>
                                      <option value="found">Found</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>    
                                    <td className='myProfileItemTitle'>Person Name</td>
                                    <td colSpan="2">
                                      <input placeholder="Person Name" value={name} onChange={this.handleNameChange} id="person_name" type="text" className="myAPTxtBox validate" />
                                    </td>
                                    </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Gender</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleGenderChange}>
                                      <option value={gender} disabled selected>Choose your option</option>
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="other">Other</option>
                                    </select>
                                    </td>
                                </tr>                                    
                                <tr>
                                    <td className='myProfileItemTitle'>Age Group</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleAgeChange}>
                                      <option value={age_group} disabled selected>Choose your option</option>
                                      <option value="14">Under-15 yrs</option>
                                      <option value="18">16-20 yrs</option>
                                      <option value="23">21-25 yrs</option>
                                      <option value="27">26-30 yrs</option>
                                      <option value="33">31-35 yrs</option>
                                      <option value="37">36-40 yrs</option>
                                      <option value="43">41-45 yrs</option>
                                      <option value="47">46-50 yrs</option>
                                      <option value="54">Above-50 yrs</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Disability</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleDisabilityChange}>
                                      <option value={disability} disabled selected>Choose your option</option>
                                      <option value="mental">Mentally Disable</option>
                                        <option value="hearing">Hearing Loss/Deafness</option>
                                        <option value="memory">Memory Loss</option>
                                        <option value="speak">Speech/Language Disorder</option>
                                        <option value="vision">Vision Loss/Blindness</option>
                                        <option value="physical">Any Physical Disability</option>
                                        <option value="other">Others</option>
                                        <option value="not_disabled">Not Disbaled</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Location</td>
                                    <td colSpan="2">
                                        <input placeholder="Person's Location" value={location} onChange={this.handleLocationChange} id="address"  type="text" className="myAP/TxtBox validate"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Country</td>
                                    <td colSpan="2">
                                    <CountryDropdown
                                     style={{border:'none'}}
                                     value={country}
                                     onChange={(val) => this.selectCountry(val)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Region</td>
                                    <td colSpan="2">
                                     <RegionDropdown
                                     style={{border:'none'}}
                                         country={country}
                                         value={region}
                                        onChange={(val) => this.selectRegion(val)} />
                                    </td>
                                </tr>                                
                                {/* <tr>
                                    <td className='myProfileItemTitle'>Phone #</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.number} id="phone" onChange={this.handleNumberChange} type="tel" className="myAP/TxtBox validate"  />
                                        :
                                        acc.number                                       
                                    }
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className='myProfileItemTitle'>Description</td>
                                    <td colSpan="2">
                                    <textarea id="textarea1APX" value={description} onChange={this.handleDescriptionChange} placeholder="Discription" className="materialize-textarea"></textarea>
                                    </td>
                                </tr>
                                    {
                                    dp_image !== ''?
                                <tr>
                                        <td colSpan='3'>
                                        {/* <img src={require('../../media/dp_replacement.png')}  alt="Add_post Image" className='dp_styleXX circle responsive-img'/> */}
                                        your uploaded image is <p>
                                            {dp_image}
                                        </p>
                                        </td>
                                        </tr>
                                :
                                <tr>
                                    {/* <td className='myProfileItemTitle'>Upload image</td> */}
                                    <td colSpan="3">
                                    <input type="file" accept="image/*" onChange={this.handleImgChange} className="myAPImgUploadBtnX"/>
                                    </td>
                                </tr>
                            }
                                {/* <tr>
                                    <td className='myProfileItemTitle'>Password</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.password} id="password" onChange={this.handlePasswordChange} type="password" className="myAP/TxtBox validate"  />
                                        :
                                        acc.password                                       
                                    }
                                    </td>
                                </tr> */}
                                {/* <tr>
                                    <td>
                                        <Link to="/home"><button className="btn myUpdateBtnX myBtn">Home</button></Link>    
                                    </td>
                                    <td>
                                        {this.state.edit?
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(acc)}}></button>    
                                        :
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.setState({edit: true}); this.adder() }}>Edit Add_post</button>    
                                    }
                                    </td>
                                </tr> */}
                                <tr>
                                    <td colSpan="2" className="center">
                                    <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(acc, posts_state, notifications_state)}}>Submit & Post</button>    
                                    </td>
                                </tr>
                            </table>
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
        user: state.users,
        posts: state.posts
    }
};

export default connect(mapStateToProps, {add_post, update_post})(Add_post);