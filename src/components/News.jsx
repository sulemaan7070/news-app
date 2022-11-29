import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("iam from constructor from news");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    console.log("componenet did mount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=8992f49c3c7f4e63ac0dd07a4701674a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handleNextClick() {
    console.log("Next");
  }
  handlePrevClick() {
    console.log("Prev");
  }
  render() {
    return (
      <div className="contrainer my-3 mx-3">
        <h2>News app Top Headlines</h2>

        <div className="row">
          {this.articles.map((element) => {
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
            onClick={this.handlePrevClick}
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
            onClick={this.handleNextClick}
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
}

export default News;
