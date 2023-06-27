import './App.css'

function App() {
  return (
    <>
      <div>
        <header>
          <h1 class="title">404 NOT FOUND</h1>
        </header>
        <main class="container">
          <div class="imagen">
            <img src="./assets/scarecrow.png"/>
          </div>
          
          <article class="content-message">
              <h1 class="font-title">I have bad news for you</h1>
              <p class="font-paragrahp">
                  The page you are looking for might be removed 
                  or is temporarily unavailable.
              </p>
              <button class="button" type="button">BACK TO HOMEPAGE</button>
          </article>
        </main>
      </div>
    </>
  )
}

export default App
