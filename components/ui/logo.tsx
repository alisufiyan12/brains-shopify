import React, { Component } from 'react';
import Link from 'next/link';
import logo1 from "../../app/assets/logo.png";
import Image  from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image className='sm:w-64 w-36' src={logo1} alt="brains digital academy logo" />
    </Link>
  )
}
