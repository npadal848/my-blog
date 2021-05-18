import React from 'react';
import articleContent from '../articles/article-content';
import ArticleList from '../components/ArticleList'
import NotFoundPage from './PageNotFound'

const Article = ({ match }) =>{
    const name = match.params.name;
    const article = articleContent.find(article => article.name===name);

    if(!article) return <NotFoundPage />

    const otherArticle = articleContent.filter(article => article.name !== name);
    
    return (
        <>
            <h2>{article.title}</h2>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles: </h3>
            <ArticleList article = {otherArticle} /> 
        </>
    )
}
export default Article;