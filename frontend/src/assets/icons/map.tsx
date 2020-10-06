import React,{Component} from 'react'
export default class Cross extends Component{
  render(){
    return (
      <svg width="401" height="401" viewBox="0 0 401 401" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="108" width="25" height="400" rx="12.5" fill="white"/>
        <rect x="268" y="1" width="25" height="400" rx="12.5" fill="white"/>
        <rect y="293" width="25" height="400" rx="12.5" transform="rotate(-90 0 293)" fill="white"/>
        <rect x="1" y="133" width="25" height="400" rx="12.5" transform="rotate(-90 1 133)" fill="white"/>
      </svg>
    );
  }
}