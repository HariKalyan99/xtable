
import { useState } from 'react'
import './App.css'

function App() {
  const articleTable = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

const [sortArticleTable, setSortArticleTable] = useState([

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

])


const sortByDate = () => {
  let sortedArticleByDate = articleTable.sort((a,b) => b.date.localeCompare(a.date));
  setSortArticleTable(sortedArticleByDate);
}

const sortByViews = () => {
  let sortedArticleByViews = articleTable.sort((a,b) => b.views - a.views);
  setSortArticleTable(sortedArticleByViews);
}

  return (
    <div>
      <h1>Date and Views Table</h1>
      <br />
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
            {sortArticleTable.length > 0 &&  sortArticleTable.map((article, ind) => {
              return <tr key={ind}>
                <td>{article.date}</td>
                <td>{article.views}</td>
                <td>{article.article}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default App
