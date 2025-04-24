---
title: Portfolio
layout: single
permalink: /portfolio/
classes: wide
author_profile: true
---

<div class="portfolio-container">
  <div class="portfolio-grid">
    {% for project in site.portfolio %}
      <div class="portfolio-item">
        {% if project.header.teaser %}
          <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }}">
        {% else %}
          <img src="/assets/images/default-project.jpg" alt="{{ project.title }}">
        {% endif %}
        <div class="portfolio-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.excerpt | strip_html | truncate: 100 }}</p>
          <a href="{{ project.url | relative_url }}" class="btn btn--primary">View Project</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<style>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .portfolio-info {
    padding: 1.5rem;
    
    h3 {
      color: var(--text-color);
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--text-color);
      margin-bottom: 1rem;
      opacity: 0.8;
    }
    
    .btn {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
}
</style> 