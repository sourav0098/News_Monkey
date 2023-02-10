import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState,useEffect } from "react";

const News =(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

  const updateNews = async()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    // until data is loading show spinner
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
    document.title="News Monkey | "+props.title
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handlePreviousClick = async () => {
  //   setPage(page-1)
  //   updateNews()
  // };
  
  // const handleNextClick = async () => {    
  //   setPage(page+1)
  //   updateNews()
  // };

  const fetchMoreData=async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    // until data is loading show spinner
    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    setPage(page+1)
    props.setProgress(100);
  }

    return (
      <div className="container mt-3">
        {/* <div className="d-flex align-items-center justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary me-3"
            onClick={this.handlePreviousClick}
          >
            &#8592; Previous
          </button>
          <button
            className="btn btn-primary"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
            }
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div> */}

        <h2 style={{marginTop:"60px"}}>News Monkey | Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h2>
      <>
        
      </>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<=totalResults}
          loader={loading && <Spinner/>}
        >
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  desc={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
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

export default News;