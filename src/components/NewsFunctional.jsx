import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function NewsFunctional() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${page}$pageSize=20`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err))
      .then((data) => {
        setArticles(data.articles);
        setPageSize(data.totalResults);
        console.log("total results,", data.totalResults);
      });
  }, []);

  async function handleNextClick() {
    if (page + 1 > Math.ceil(pageSize / 20)) {
    } else {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${
          page + 1
        }&pageSize=20`
      )
        .then((data) => data.json())
        .catch((err) => console.log(err))
        .then((data) => {
          setArticles(data.articles);
        });
      console.log(page);
      setPage(page + 1);
    }
  }
  async function handlePrevClick() {
    console.log("Prev");
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8992f49c3c7f4e63ac0dd07a4701674a&page=${
        page - 1
      }&pageSize=20`
    )
      .then((data) => data.json())
      .catch((err) => console.log(err))
      .then((data) => {
        setArticles(data.articles);
      });
    console.log(page);
    setPage(page - 1);
  }
  return (
    <div className="contrainer my-3 mx-3">
      <h2>News app Top Headlines</h2>

      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrlAsId={element.url}
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
