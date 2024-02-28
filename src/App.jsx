
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

const [sortArticleTable, setSortArticleTable] = useState(articleTable)

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button>Sort by Date</button>
      <button>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
            {sortArticleTable.map((article, ind) => {
              return <tr key={article.date}>
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
