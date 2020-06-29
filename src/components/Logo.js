import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const logoUrl = 'https://i.pinimg.com/originals/f2/96/19/f2961914072817f63060244e992718c3.png'


export default function Logo() {
    return (
        <Link to="/">
            <Image 
                src={logoUrl} 
                width="200"
                height="100" 
                fluid 
            />
        </Link>
    )
}
