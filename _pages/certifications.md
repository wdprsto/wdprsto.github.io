---
title: Certifications
layout: certifications
permalink: /certifications/
author_profile: false
classes: certifications-page
---

<div class="certifications-header">
  <div class="header-content">
    <div class="profile-section">
      <img src="/assets/images/pas_foto_wahyu.jpeg" alt="Profile Photo" class="profile-image">
      <div class="profile-info">
        <h2>{{ site.author.name }}</h2>
        <p>{{ site.author.bio }}</p>
      </div>
    </div>
    <h1 class="page-title">Professional Certifications</h1>
  </div>
</div>

<div class="certifications-container">
  <div class="certification-grid">
    {% assign sorted_by_date = site.data.certifications | sort: "date" | reverse %}
    {% assign sorted_certifications = sorted_by_date | sort: "priority" %}
    {% for certification in sorted_certifications %}
      {% unless certification.name contains "Example" or certification.name contains "Certification Name" %}
        <div class="certification-card">
          <div class="certification-image">
            {% if certification.image %}
              <img src="{{ certification.image | relative_url }}" alt="{{ certification.name }}" class="cert-img">
            {% else %}
              <img src="/assets/images/default-certification.jpg" alt="{{ certification.name }}" class="cert-img">
            {% endif %}
            <div class="certification-overlay">
              <button class="zoom-link" data-image="{{ certification.image | relative_url }}">
                <i class="fas fa-search-plus"></i>
              </button>
            </div>
          </div>
          <div class="certification-details">
            <div class="certification-logo">
              {% if certification.issuer_logo %}
                <img src="{{ certification.issuer_logo | relative_url }}" alt="{{ certification.issuer }}">
              {% else %}
                <span class="issuer-text">{{ certification.issuer }}</span>
              {% endif %}
            </div>
            <h3>{{ certification.name }}</h3>
            <div class="certification-meta">
              <p>Issued: {{ certification.date | date: "%b %Y" }}</p>
              {% if certification.expiry %}
                <p>Valid until: {{ certification.expiry | date: "%b %Y" }}</p>
              {% endif %}
            </div>
            {% if certification.verification_link %}
              <a href="{{ certification.verification_link }}" class="verify-button" target="_blank">
                <i class="fas fa-external-link-alt"></i> Verify Certificate
              </a>
            {% endif %}
          </div>
        </div>
      {% endunless %}
    {% endfor %}
  </div>
</div>

<div class="modal" id="imageModal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modalImage" src="" alt="Certificate">
  </div>
</div>

<style>
  :root {
    --primary-color: #A8D8EA;
    --secondary-color: #71C9CE;
    --text-color: #2B4F60;
    --background-color: #F1F9FB;
    --accent-color: #5885AF;
  }

  body {
    background-color: var(--background-color);
  }
  
  .certifications-page .page__inner-wrap {
    max-width: 100%;
    padding: 0;
  }
  
  .certifications-page .page__content {
    width: 100%;
    padding: 0;
    float: none;
  }
  
  .certifications-header {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .profile-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 2rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .profile-info {
    text-align: left;
    color: white;

    h2 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }
  }
  
  .page-title {
    color: white;
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
  }
  
  .certifications-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem 4rem;
  }
  
  .certification-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .certification-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .certification-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .certification-image {
    position: relative;
    height: 300px;
    overflow: hidden;
  }
  
  .cert-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .certification-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .certification-image:hover .certification-overlay {
    opacity: 1;
  }
  
  .certification-image:hover .cert-img {
    transform: scale(1.05);
  }
  
  .zoom-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    color: var(--accent-color);
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .zoom-link:hover {
    background: var(--accent-color);
    color: white;
    transform: scale(1.1);
  }
  
  .certification-details {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .certification-logo {
    height: 30px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  
  .certification-logo img {
    max-height: 100%;
    max-width: 120px;
  }
  
  .issuer-text {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
  }
  
  .certification-details h3 {
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    color: var(--text-color);
    line-height: 1.4;
  }
  
  .certification-meta {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
    flex-grow: 1;
  }
  
  .certification-meta p {
    margin: 0 0 0.3rem 0;
  }
  
  .verify-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--accent-color);
    color: white !important;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none !important;
    align-self: stretch;
    border: none;
  }
  
  .verify-button:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  .verify-button i {
    margin-right: 0.5rem;
  }
  
  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    overflow: hidden;
  }
  
  .modal-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #modalImage {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
  
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1000;
    transition: color 0.3s ease;
  }
  
  .close:hover {
    color: var(--primary-color);
  }
  
  @media screen and (max-width: 1200px) {
    .certification-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media screen and (max-width: 768px) {
    .certification-grid {
      grid-template-columns: 1fr;
    }
    
    .profile-section {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }

    .profile-info {
      text-align: center;
    }
    
    .certifications-header {
      padding: 2rem 1rem;
    }
    
    .page-title {
      font-size: 2rem;
    }
    
    .certifications-container {
      padding: 0 1rem 3rem;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const zoomButtons = document.querySelectorAll('.zoom-link');
  
  // Open modal when clicking zoom button
  zoomButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('data-image');
      modal.style.display = 'block';
      modalImg.src = imgSrc;
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });
  
  // Close modal when clicking X
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === modalImg) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });
  
  // Close modal with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });
});
</script> 