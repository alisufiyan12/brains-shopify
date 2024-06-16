'use client'

import React from 'react';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import { FaPlay } from "react-icons/fa";
import MuxPlayer from "@mux/mux-player-react"; 

import ReactPlayer from 'react-player'


export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* 
          */}
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 ">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000081] to-[#96bf48]">Shopify</span> Masterclass</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Unlock Your Potential in E-commerce, Marketing, and Design – Discover How in the Video Below!</p>
                {/* 
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
                */}
            </div>
          </div>

          {/* Hero image  - this is react so its better to use Mux but be careful with 4k uploades and the cost
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

                <MuxPlayer
                stream-type="on-demand"
                playback-id="oXHtoOkO1BnlomhrOMheB9oWEsTmVXE229HX02J1Vbw4"
                metadata-video-title="Tea and Cookies"
                metadata-viewer-user-id="user-24601"
                accent-color=''
                ></MuxPlayer>
          <div className='flex items-center justify-center border-red-400 border-2'>
          */}
          <div id="headd" className="h-64 sm:h-[630px] flex justify-center rounded-md overflow-hidden m-0 p-0 shadow-md">
          <ReactPlayer 
          className=""
          width='100%' 
          height='100%'
          controls={true}
          url='https://youtu.be/s4adrGFa_6A' />

          </div>



        </div>

      </div>
    </section>
  )
}