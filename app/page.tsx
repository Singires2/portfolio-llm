import React from 'react'
export default function Home() {
  return (
    <>
      <section>
        <h2>Featured work</h2>
        <p>Welcome — I build data systems, ML models, and LLM applications. Explore projects and demos.</p>
      </section>
      <section style={{marginTop:20}}>
        <h3>Projects</h3>
        <ul>
          <li>LLM Evaluation — RAG + evaluation tooling</li>
          <li>Retail Forecasting — time-series pipeline</li>
          <li>Customer Segmentation — clustering + insights</li>
        </ul>
      </section>
    </>
  )
}
