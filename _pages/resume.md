---
title: Resume
layout: single
permalink: /resume/
classes: wide
author_profile: true
---

<div class="resume-container">
  <section class="resume-section education">
    <h2>Education</h2>
    <div class="education-item">
      <h3>Your University Name</h3>
      <p class="meta">Bachelor of Science in Your Major • 20XX - 20XX</p>
      <ul>
        <li>Relevant coursework: Course 1, Course 2, Course 3</li>
        <li>GPA: X.XX/4.00</li>
        <li>Academic achievements and honors</li>
      </ul>
    </div>
  </section>

  <section class="resume-section experience">
    <h2>Professional Experience</h2>
    
    <div class="experience-item">
      <h3>Company Name</h3>
      <p class="meta">Position • Location • Start Date - End Date</p>
      <ul>
        <li>Achievement 1 with quantifiable results</li>
        <li>Achievement 2 with impact</li>
        <li>Achievement 3 showcasing leadership</li>
      </ul>
    </div>

    <div class="experience-item">
      <h3>Previous Company</h3>
      <p class="meta">Position • Location • Start Date - End Date</p>
      <ul>
        <li>Achievement 1</li>
        <li>Achievement 2</li>
        <li>Achievement 3</li>
      </ul>
    </div>
  </section>

  <section class="resume-section organizations">
    <h2>Organizations & Leadership</h2>
    
    <div class="org-item">
      <h3>Organization Name</h3>
      <p class="meta">Role • Start Date - End Date</p>
      <ul>
        <li>Responsibility or achievement 1</li>
        <li>Responsibility or achievement 2</li>
      </ul>
    </div>
  </section>

  <section class="resume-section skills">
    <h2>Skills</h2>
    
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>Language 1</li>
          <li>Language 2</li>
          <li>Language 3</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3>Tools & Technologies</h3>
        <ul>
          <li>Tool 1</li>
          <li>Tool 2</li>
          <li>Tool 3</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="resume-section contact">
    <h2>Connect With Me</h2>
    <div class="social-links">
      {% if site.author.linkedin %}
        <a href="{{ site.author.linkedin }}" class="btn btn--linkedin">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      {% endif %}
      
      {% if site.author.github %}
        <a href="{{ site.author.github }}" class="btn btn--github">
          <i class="fab fa-github"></i> GitHub
        </a>
      {% endif %}
      
      {% if site.author.email %}
        <a href="mailto:{{ site.author.email }}" class="btn btn--email">
          <i class="fas fa-envelope"></i> Email
        </a>
      {% endif %}
    </div>
  </section>
</div>

<style>
.resume-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.resume-section {
  margin-bottom: 3rem;
  
  h2 {
    color: var(--text-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }
}

.education-item,
.experience-item,
.org-item {
  margin-bottom: 2rem;
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  .meta {
    color: var(--text-color);
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  .skill-category {
    h3 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }
    
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      
      li {
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        position: relative;
        
        &:before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--primary-color);
        }
      }
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    i {
      font-size: 1.2em;
    }
  }
}
</style> 