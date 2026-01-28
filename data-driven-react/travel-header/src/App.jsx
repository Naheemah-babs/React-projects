import './styles/App.css';
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx';
import data from './components/data.js'


function App() {
  const entry = data.map((travelEntry, index) => {
      return <Entry 
              key = {travelEntry.id}
              id={travelEntry.id}
              index={index}
              img = {travelEntry.img} 
              title = {travelEntry.title} 
              country = {travelEntry.country} 
              googleMapsLink = {travelEntry.googleMapsLink}
              dates = {travelEntry.dates} 
              text = {travelEntry.text}
        />
  })
  return (
    <>
      <body className='full-body-container'>
        <Header></Header>
          <main className='container'>
              {entry}
          </main>
        </body>
    </>
  )
}

export default App
