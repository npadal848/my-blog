import React from 'react';
import articleContent from '../articles/article-content';
import ArticleList from '../components/ArticleList'

const HomePage = () =>(
    <>
        <h2>Hello, Welcome to My Blog</h2>
        <p>
        The personal blog is an ongoing online diary or commentary written by an individual, rather than a corporation or organization. While the vast majority of personal blogs attract very few readers, other than the blogger's immediate family and friends, a small number of personal blogs have become popular, to the point that they have attracted lucrative advertising sponsorship. A tiny number of personal bloggers have become famous, both in the online community and in the real world.
        </p>
        <p>
        The personal blog is an ongoing online diary or commentary written by an individual, rather than a corporation or organization. While the vast majority of personal blogs attract very few readers, other than the blogger's immediate family and friends, a small number of personal blogs have become popular, to the point that they have attracted lucrative advertising sponsorship. A tiny number of personal bloggers have become famous, both in the online community and in the real world.
        </p>
        <p>
        The personal blog is an ongoing online diary or commentary written by an individual, rather than a corporation or organization. While the vast majority of personal blogs attract very few readers, other than the blogger's immediate family and friends, a small number of personal blogs have become popular, to the point that they have attracted lucrative advertising sponsorship. A tiny number of personal bloggers have become famous, both in the online community and in the real world.
        </p>
        <h3>Popular Articles: </h3>
        <ArticleList article = {articleContent} />
    </>
)
export default HomePage;