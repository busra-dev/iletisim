import React from "react";
import "../styles/ContactPage.css"; // CSS dosyasını dahil ediyoruz

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">İletişim Bilgileri</h1>

      {/* Kartlar */}
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h2>Adres</h2>
          <p>İstanbul, Türkiye</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h2>Telefon</h2>
          <p>+90 555 123 45 67</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <h2>E-posta</h2>
          <p>info@site.com</p>
        </div>
      </div>

      {/* Harita */}
      <iframe
        className="contact-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48143.72624989835!2d28.949660846377074!3d41.013840071474225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzMwLjIiTiAyOMKwNTMnMDcuOSJF!5e0!3m2!1str!2str!4v1611764692959!5m2!1str!2str"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
