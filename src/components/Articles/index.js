import { useEffect, useState } from 'react';

import Article from '../Article';

import './index.scss';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        'https://emm-gfx.net/wp-json/wp/v2/posts?_fields=id,date,link,title,excerpt.rendered'
      );
      const articles = await response.json();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  return (
    <section id="articles" className="container">
      <h2>03. Some of my articles</h2>

      {articles.length === 0 && <p>Retrieving articles...</p>}

      <div className="row">
        {articles.slice(0, 4).map((article, index) => {
          return (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={article.id}>
              <Article article={article} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
