import React from "react";
import "../styles/Footer.css"; // CSS dosyasını dahil ediyoruz
import logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                            <h6>Sosyal Basketbol Platformu</h6>
                        </div>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Site Bölümleri</h4>
                        <a href="/sosyal-baskesbol-sahasi">
                            <p>Sosyal Basketbol Sahası</p>
                        </a>
                        <a href="/mac-videolari">
                            <p>Maç Videoları</p>
                        </a>
                        <a href="/uye-videolari">
                            <p>Üye Videoları</p>
                        </a>
                        <a href="/sahalar">
                            <p>Sahalar</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Tüm Sayfalar</h4>
                        <a href="/anasayfa">
                            <p>Anasayfa</p>
                        </a>
                        <a href="/hakkimizda">
                            <p>Hakkımızda</p>
                        </a>
                        <a href="/iletisim">
                            <p>İletişim</p>
                        </a>
                        <a href="/kvkk">
                            <p>KVKK</p>
                        </a>
                        <a href="/site-kullanim-sartlari">
                            <p>Site Kullanım Şartları</p>
                        </a>
                        <a href="/sss">
                            <p>Sıkça Sorulan Sorular</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Bizi Takip Edin</h4>
                        <div className="sosyalmedya">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={instagram} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                        </div>
                        <div>
                            <p>En güzel basketbol videolarını sosyal medyamızda günlük olarak bulabilirsiniz.</p>
                        </div>
                        <button>Sporcu Ol</button>
                    </div>
                </div>
                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Sosyal Basketbol Platformu. Tüm Hakları Saklıdır.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}