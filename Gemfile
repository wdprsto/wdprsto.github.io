source "https://rubygems.org"
ruby ">= 3.1.0"  # Ensure compatibility with GitHub Actions and local environment

gem "jekyll", "~> 4.4.1"
gem "minimal-mistakes-jekyll"
gem "webrick", "~> 1.9.1"
gem "rake", "~> 13.2.1"
gem "sass-embedded", "~> 1.64.1"  # Use a version compatible with Ruby 3.1.x

group :jekyll_plugins do
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-sitemap", "~> 1.3"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-feed", "~> 0.1"
  gem "jekyll-include-cache", "~> 0.1"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
