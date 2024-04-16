import React,{useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import {MdNotificatios}from 'react-icon/md';
import {BsSearch} from 'react-icon/bs';
import{CgMenuLeft, CgMenuRight} from 'react-icon/cg';

import Style from "./NavBar.module.css";
import {Discover,HelpCenter,Profile,Notification,SideBar}from './index';
import {Button} from '../componentindex';
import img from "../../img";
const NavBar = () => {
const [Discover, setfirst] = useState(false);
const [help, sethelp] = useState(false);
const [notification, setnotification] = useState(false);
const [profile, setprofile] = useState(false);
const [openSideMenu, setopenSideMenu] = useState(false);

const OpenMenu = (e) => {
  const btnText=e.target.innerText;
  if(btnText=="Discover"){
    setDiscover(true);
    sethelp(false);
    setnotification(false);
    setprofile(false);

  }else if (btnText=="HelpCenter") {
    setDiscover(false);
    sethelp(true);
    setnotification(false);
    setprofile(false);
    
  }
  else{
    setDiscover(false);
    sethelp(false);
    setnotification(false);
    setprofile(false);
  }
}
const OpenNotification=()=>{
  if (!notification) {
    setDiscover(false);
    sethelp(false);
    setnotification(true);
    setprofile(false);
  }
  else{
    setnotification(false);
  }
 


  return <div className={Style.navbar}>
    <div className={Style.navbar_container}>
      <div className={Style.navbar_container_left}>
        <div className={Style.logo}>
          <Image src={img.logo} alt="NFT MARKETPLACE" width={100} height={100} />
        </div>  
<div className={Style.navbar_container_left_box_input}>
  <div className={Style.navbar_container_left_box_input_box}>
    <input type="text" placeholder="Search NFT" />
    <BsSearch onClick={()=>{}} className={Style.search_icon}></BsSearch>
  </div>
</div>
      </div>
      {/* end of left section */}
      <div className={Style.navbar_container_right}>
        <div className={Style.navbar_container_right_discover}>
          {/* discover menu */}
          <p onClick={(e)=>OpenMenu(e)}>Discover</p>
          {discover && (
          <div className={Style.navbar_container_right_discover_box}>
            <Discover />
          </div>
          )}
          
        </div>
        <div className={Style.navbar_container_right_help}>
        <p onClick={(e)=>OpenMenu(e)}>HelpCenter</p>
        {help && (
          <div className={Style.navbar_container_right_help_box}>
            <HelpCenter />
          </div>
          )}
        </div>
        <div className={Style.navbar_container_right_notify}>
       <MdNotificatios className={Style.notify} onClick= {()=>OpenNotification}/>
       {notification && <Notification/>}
      
        </div>
      </div>
    </div>
  </div>;
};
}
export default NavBar;