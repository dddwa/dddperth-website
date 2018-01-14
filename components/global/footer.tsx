import * as React from 'react';

export default () => 
<footer>
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <nav className="foot-nav">
          {/*<ul>
            <li>
              <a href="{{ .URL  | relLangURL }}">{{ .Name }}</a>
            </li>
          </ul>*/}
        </nav>
      </div>
      <div className="col-xs-12">
        {/*<ul className="social">
          {{ if $.Site.Author.twitter }}
          <li><a rel="nofollow" class="tw targetBlank" href="https://twitter.com/{{ .Site.Author.twitter }}"></a></li>
          {{ end }}
          {{ if $.Site.Author.github }}
          <li><a rel="nofollow" class="gh targetBlank" href="https://github.com/{{ .Site.Author.github }}"></a></li>
          {{ end }}
          {{ if $.Site.Author.instagram }}
          <li><a rel="nofollow" class="ig targetBlank" href="https://www.instagram.com/{{ .Site.Author.instagram }}"></a></li>
          {{ end }}
          {{ if $.Site.Author.flickr }}
          <li><a rel="nofollow" class="fr targetBlank" href="https://www.flickr.com/{{ .Site.Author.flickr }}"></a></li>
          {{ end }}
          {{ if $.Site.Author.email }}
          <li><a rel="nofollow" class="em" href="mailto:{{ .Site.Author.email }}"></a></li>
          {{ end }}
        </ul>*/}
      </div>
      <div className="col-xs-12 copyright">
        Copyright &copy; 2017 {/*{ .Site.Author.name }*/}
      </div>
      {/*Add clock javascript*/}
    </div>
  </div>
</footer>