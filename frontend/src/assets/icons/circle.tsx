import React,{Component} from 'react'
export default class Cross extends Component{
  render(){
    return (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <circle cx="50.5" cy="42.5" r="36.5" stroke="white" strokeWidth="12"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="-4" dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.9855 0 0 0 0 0.275 0 0 0 0 1 0 0 0 0.7 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>

    );
  }
}