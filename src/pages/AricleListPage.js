import React from 'react';
import articleContent from '../articles/article-content';
import ArticleList from '../components/ArticleList';

const AricleListPage = () =>(
    <>
        <h2>Article List</h2>
        <ArticleList article = {articleContent} />
    </>
)
export default AricleListPage;