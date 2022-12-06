import React from 'react'
import Hero from '../components/module/Hero'
import Section1 from '../components/module/Section1'

const Home = () => {
  return (
    <main id='investing'>
      <Hero />
      <Section1 />

      <section>
        <h1 className="text-3xl font-bold text-center">
          Hello world!
        </h1>
      </section>
    </main>
  )
}

export default Home