import React,{Component} from 'react'
export default class Cross extends Component{
  render(){
    return (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <rect x="78.7107" y="0.142136" width="20" height="100" rx="10" transform="rotate(45 78.7107 0.142136)" fill="white"/>
          <rect x="8" y="14.1421" width="20" height="100" rx="10" transform="rotate(-45 8 14.1421)" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="92.8528" height="92.9949" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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