import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function NewsFunctional(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${page}&pageSize=${props.pageSize}`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err))
      .then((data) => {
        setArticles(data.articles);
        setPageSize(data.totalResults);
        setLoading(false);
        console.log("total results,", data.totalResults);
      });
  }, []);

  async function handleNextClick() {
    if (!(page + 1 > Math.ceil(pageSize / props.pageSize))) {
      setLoading(true);
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          props.country
        }&category=${
          props.category
        }&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${page + 1}&pageSize=${
          props.pageSize
        }`
      )
        .then((data) => data.json())
        .catch((err) => console.log(err))
        .then((data) => {
          setArticles(data.articles);
          setLoading(false);
        });
      console.log(page);
      setPage(page + 1);
    }
  }
  async function handlePrevClick() {
    console.log("Prev");
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${page - 1}&pageSize=${
        props.pageSize
      }`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err))
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
    console.log(page);
    setPage(page - 1);
  }
  return (
    <div className="container my-5 " style={{ margin: " auto" }}>
      <h2 className="text-center">News app Top Headlines</h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={element.url}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrlAsId={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark btn-lg"
          disabled={page <= 1}
          onClick={handlePrevClick}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeWidth="2"
              d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
              transform="matrix(-1 0 0 1 24 0)"
            ></path>
          </svg>
          Prev
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg"
          disabled={page + 1 > Math.ceil(pageSize / props.pageSize)}
          onClick={handleNextClick}
        >
          Next
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeWidth="2"
              d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NewsFunctional;
