import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsFunctional(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)} - The News App`;
    // eslint-disable-next-line
  }, [page]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  async function updateNews() {
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
  }

  async function handleNextClick() {
    setPage(page + 1);
  }
  async function handlePrevClick() {
    setPage(page - 1);
  }
  return (
    <div className="container my-5 " style={{ margin: " auto" }}>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row">
          {articles.map((element) => {
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
      </InfiniteScroll>
    </div>
  );
}

export default NewsFunctional;
