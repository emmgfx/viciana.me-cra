import { useEffect, useState, useRef } from 'react';
import { useIntersection } from 'react-use';

import { ReactComponent as Arrow } from '../../images/icon-arrow-right.svg';

import './index.scss';

const Article = ({ article, index }) => {
  const [shown, setShown] = useState(false);
  const intersectionRef = useRef(null);
  const { isIntersecting = false } =
    useIntersection(intersectionRef, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }) || {};

  useEffect(() => {
    if (shown) return;
    setShown(isIntersecting);
  }, [isIntersecting, shown, setShown]);

  return (
    <article
      ref={intersectionRef}
      className="article"
      style={{ '--index': index }}
      visible={shown ? 'true' : 'false'}
    >
      <h3>{article.title.rendered}</h3>
      <p>{article.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}</p>
      <a
        title={article.title.rendered}
        href={article.link}
        target="_blank"
        className="read-more"
        rel="noreferrer noopener"
      >
        Read more
        <Arrow />
      </a>
    </article>
  );
};

export default Article;
