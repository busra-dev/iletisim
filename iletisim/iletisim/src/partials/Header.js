import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

export default function Header() {
    return (
       <div className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <nav className="menu-container">
                <ul>
                    <li><a href="/shs">SHS NEDİR?</a></li>
                    <li><a href="/sahalar">Sahalar</a></li>
                    <li><a href="/kayitol">Kayıt Ol</a></li>
                </ul>
                <button>Giriş Yap</button>
            </nav>
        </div>
    );
}
