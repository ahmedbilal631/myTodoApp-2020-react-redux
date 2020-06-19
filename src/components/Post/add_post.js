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
    console.log(this.state, 'from construct');    
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
            console.log(textX, 'yes status change');
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
    Checker=(acc)=>{
        let captureState = this.state;
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
                                            this.AddNow();
                                          }
                                        if(captureState.dp_image === ''){
                                            captureState.dp_image = acc.dp_image;}
                                            
    }
    //..............................................
    //update function
    AddNow=()=>{
        // console.log('id recieved', acc.user_id);
     
     
        //time identity in a post
      let yr = new Date().getFullYear().toString();
      let dt = new Date().getMonth().toString();
      let mn = new Date().getDate().toString();
      let hr = new Date().getHours().toString();
      let min = new Date().getMinutes().toString();
      let get_time = yr+dt+mn+hr+min;
      console.log(get_time, 'form add_post');
      this.setState({
          post_time: get_time
      })
      //.........................................
        console.log(this.state, 'state from update');
        
            this.props.add_post({
                user_id: (Math.round(Math.random()*1000)),
                name : this.state.name,
                status: this.state.status,
                gender: this.state.gender,
                age_group: this.state.age_group,
                disability: this.state.disability,
                location: this.state.location,
                country: this.state.country,
                region: this.state.region,
                description: this.state.description,
                resloved: this.state.resloved,
                // password:this.state.password,
                dp_image: this.state.dp_image,
                post_time: this.state.post_time,
                post_creator_email: 'abc@abc.abc',
            })
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
        //..............................................
        //Delete account function
        Delete_Account=(acc)=>{
            console.log('delete account', acc.user_id);
        }
        //...............................................

    adder=()=>{
    console.log(this.state, 'from adder');
    
        // this.props.addUser({text: this.state.name});
        // this.setState({
        //     name: ''
        // });
    }

    //..................................................

    render() {
        let acc = this.props.recievedUsers[0];
        let store = this.props.recievedUsers;
        console.log(store, 'current store');
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
        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    <p className="myPageTitle">
                        NEW POST
                    </p>
                    {/* <div  className="dp_Box_Style">
                            {acc.profile_image == ''? 
                        // <p className="place_for_dp_Text">DP</p>    
                        <img src={Dp_Replacement} alt="Add_post Image" className='dp_style responsive-img'/>
                        :
                        <img src={acc.dp_image} width="150px" alt="Add_post Image" className='dp_styleX circle responsive-img'/>
                    }
                            </div> */}

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
                                      <option value="missing">Male</option>
                                      <option value="found">Female</option>
                                      <option value="found">Other</option>
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
                                    dp_image != ''?
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
                                    <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(acc)}}>Submit & Post</button>    
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
        recievedUsers: state.posts
    }
};

export default connect(mapStateToProps, {add_post, update_post})(Add_post);