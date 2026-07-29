import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
   <>
    <footer className="site-footer">
  <div className="footer-links">
    <a href="#">About Us</a>
    <a href="#">App</a>
    <a href="#">Bhagavad Gita AI</a>
    <a href="#">Acknowledgements</a>
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Blog</a>
    <a href="#">Donate</a>
    <a href="#">API</a>
    <a href="#">Contact Us</a>
  </div>
  <div className="footer-icons">
    <a href="#"><FaFacebook /></a>
    <a href="#"><FaXTwitter /></a> 
    <a href="#"><FaGithub /></a>
  </div>

</footer>
<div class="footer-2">
    &copy;2025 Copyright: <Link to="https://vedvyas.org/">Ved Vyas Foundation</Link> All rights reserved.
  </div>
  </>
  )
}
