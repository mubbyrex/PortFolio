import React from "react";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { articles, openSource } from "../../portfolio/portfolio";
import "./BlogAndResearch.css";

const BlogAndResearch = () => {
  const hasArticles = articles.length > 0;
  const hasOpenSource = openSource.length > 0;

  if (!hasArticles && !hasOpenSource) return null;

  return (
    <section className="section insights reveal" id="insights">
      <h2 className="section__title">Insights & Community</h2>
      <p className="blog-research__intro">
        I publish practical cloud engineering insights and contribute
        open-source tooling that improves platform reliability, automation, and
        team workflows.
      </p>
      <div className="blog-research__grid">
        <div className="blog-research__panel">
          <h3>Articles & Guides</h3>
          {hasArticles ? (
            articles.map((item, index) => (
              <article key={index} className="blog-research__card">
                <div>
                  <h4>{item.title}</h4>
                  <p className="blog-research__meta">{item.date}</p>
                  <p>{item.summary}</p>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-research__button"
                  >
                    <AiFillMediumCircle size="1.2em" /> Read
                  </a>
                ) : (
                  <span className="blog-research__status">Coming soon</span>
                )}
              </article>
            ))
          ) : (
            <p className="blog-research__empty">
              Practical articles for senior DevOps, cloud architecture, and
              production reliability are on the roadmap.
            </p>
          )}
        </div>
        <div className="blog-research__panel">
          <h3>Open source & community</h3>
          {hasOpenSource ? (
            openSource.map((item, index) => (
              <article key={index} className="blog-research__card">
                <div>
                  <h4>{item.title}</h4>
                  <p className="blog-research__meta">{item.description}</p>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-research__button"
                  >
                    <AiFillGithub size="1.2em" /> Explore
                  </a>
                ) : (
                  <span className="blog-research__status">
                    Active contribution
                  </span>
                )}
              </article>
            ))
          ) : (
            <p className="blog-research__empty">
              Open source contributions and community tooling will be
              highlighted here as they expand.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogAndResearch;
