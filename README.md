# wdprsto.github.io

How to install jekyll:
- https://jekyllrb.com/docs/

- Install all prerequisites.
- Install the jekyll and bundler gems.
`gem install jekyll bundler`
- Create a new Jekyll site at ./myblog.
`jekyll new myblog`
- Change into your new directory.
`cd myblog`
- Build the site and make it available on a local server. (Gabisa dibuka di vscode, jalankan dari cmd)
`bundle exec jekyll serve`
to reload in every change,
`bundle exec jekyll serve --livereload`
- Browse to http://localhost:4000

# Creating a new post
- To create a post, add a file to your _posts directory with the following format:
`YEAR-MONTH-DAY-title.MARKUP`
- All blog post files must begin with `front matter` which is typically used to set a layout or other meta data. For a simple example this can just be empty:
```
---
layout: post
title:  "Welcome to Jekyll!"
---

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!
```
- Categories can be defined via the front matter using keys category or categories. depending on whether front matter has `category: classic hollywood`, or `categories: `classic hollywood`, the example post above would have the URL as either `movies/horror/classic%20hollywood/2019/05/21/bride-of-chucky.html` or `movies/horror/classic/hollywood/2019/05/21/bride-of-chucky.html`
- Collections can be defined by adding collections metadata on config.yml
```
#kalau ga ada aditional metadata
collections:
  - staff_members

#kalau sorted
collections:
    staff_members:
        sort_by: lesson
        permalink: /:collection/:name
```
  - After this, you can add new folder named _staff_members that will keep post with same category
  - Add new post doc on those new collection folder
  - Later on, you can iterate the data using `site.staff_members` variable. In the snippet below, the name & position variable was the one that is define within the staff_member_sample.md inside the collection
    ```
        #in staff.md file
        ---
        name: Jane Doe
        position: Developer
        ---
        Jane has worked on Jekyll for the past *five years*.
    ```
    ```
        #data can be used
        {% for staff_member in site.staff_members %}
        <h2>{{ staff_member.name }} - {{ staff_member.position }}</h2>
        <p>{{ staff_member.content | markdownify }}</p>
        {% endfor %}
    ```
- - `_data` folder is consist of data, can be in form of yml/csv. Example of csv file & how to read it as follows:
```
name,github
Eric Mill,konklone
Parker Moore,parkr
Liu Fengyun,liufengyun
```
```
<ul>
{% for member in site.data.members %}
  <li>
    <a href="https://github.com/{{ member.github }}">
      {{ member.name }}
    </a>
  </li>
{% endfor %}
</ul>
```
- The include tag allows you to include the content from another file stored in the _includes folder:
```
{% include footer.html %}
```
- To enable pagination for posts on your blog, add a line to the `_config.yml` file that specifies how many items should be displayed per page. As a not, do not add permalink in front of blog, it will break
```
paginate: 5
```

# Overriding theme defaults
Jekyll themes set default data, layouts, includes, and stylesheets. However, you can override any of the theme defaults with your own site content.

To replace layouts or includes in your theme, make a copy in your `_layouts` or `_includes` directory of the specific file you wish to modify, or create the

- fork the Minimal Mistakes theme
- Remove the Unnecessary
```
.editorconfig
.gitattributes
.github
/docs
/test (isi sample data)
CHANGELOG.md
minimal-mistakes-jekyll.gemspec (perlu)
README.md
screenshot-layouts.png
screenshot.png
```
- Jalankan bundle install untuk menginstall dependency dari file Gemfile