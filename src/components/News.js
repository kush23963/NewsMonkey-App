import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
  super();
  this.state = {
    articles: [],
    loading: false,
    page:1
  }
}
async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d6f24e390ac247889935851820fa0aa8";
    let data  = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
}
  render() {
    return (
      <div className='container my-4'>
        <h2>NewsMonkey - Top HeadLines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key = {element.url}>
          <NewsItem  title= {element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}  imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div> 
        })}
        </div>
        <div className="container">
            
        </div>
      </div>
    )
  }
}

export default News
