'use client'

import React, { useState, useEffect, useRef, use } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, vs, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Scrollspy from 'react-scrollspy';
import NavigationStore from '../navigation/NavigationStore';
import './MarkdownView.scss';
import { observer } from 'mobx-react';
import Sidebar from '@/components/navigation/sidebar/Sidebar';
import RelatedCard from '../cards/relatedCard';

import { getArticles, getArticlesBySeries } from '@/lib/github';
import { getSeries } from '@/lib/github';
import { set } from 'mobx';

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  h2({ node, children }) {
    const headingText = React.Children.toArray(children).join('');
    const headingId = headingText.replace(/\s/g, '%20');
    return (
      <h2 id={headingId}>{children}</h2>
    );
  },
};

const MarkDownView = observer(({ rawMdText, children }) => {
  const [markdown, setMarkdown] = useState('');
  const [headings, setHeadings] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isSeries, setIsSeries] = useState(false);
  const timerRef = useRef(null);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    setMarkdown(rawMdText);
    const headingRegex = /(?:^|\n)## +(.*?)(?:\n|$)/g;
    let match;
    const newHeadings = [];
    while ((match = headingRegex.exec(rawMdText)) !== null) {
      newHeadings.push(match[1]);
    }
    setHeadings(newHeadings);

    NavigationStore.isSidebarOpen = false;
  }, [rawMdText]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    NavigationStore.isSidebarOpen = !sidebarVisible;
  };


  const [fileData, setFileData] = useState([]);


  useEffect(() => {
    console.log('isSeries', isSeries);
    if (NavigationStore.currentSeries !== null) {
      getArticlesBySeries(NavigationStore.currentSeries).then
        (articles => {
          console.log('articles', articles);
          setFileData(articles);
          setIsSeries(true);
        });

    }
  }, [NavigationStore.currentSeries]);

  return (
    <div className="markdown-view-container">
      <Sidebar>
        <Scrollspy items={headings} currentClassName="is-current">
          {headings.map((heading, index) => (
            <li key={index}>
              <a href={`#${heading}`}>{heading}</a>
            </li>
          ))}
        </Scrollspy>
        {children}
      </Sidebar>

      <div className='markdown-view-navigation'>
        <Scrollspy items={headings} currentClassName="is-current">
          {headings.map((heading, index) => (
            <li key={index}>
              <a href={`#${heading}`}>{heading}</a>
            </li>
          ))}
        </Scrollspy>
      </div>

      <div className="markdown-view">
        <div className="markdown-view-content">
          <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </div>
      </div>
      <div className='markdown-view-related'>
        {isSeries &&
          <>
            <h2 className='markdown-view-related-title'>In Series</h2>
            <div className='markdown-view-related-cardsContainer'>
              {fileData.map((article, index) => (
                <>
                <RelatedCard
                  imageUrl={article.thumbnailImageUrl}
                  title={article.title}
                  date={'Last Updated: ' + article.dateModified}
                  actionLink={`/blog/${encodeURIComponent(article.blogslug)}`}
                  description={"This is a description"}
                  isSeries={false}
                /></>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
});

export default MarkDownView;