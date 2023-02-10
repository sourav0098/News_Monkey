import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>
            <span className="badge text-bg-secondary">{source}</span>
          </h5>
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{desc}...</p>
          <p class="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
