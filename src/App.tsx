
import React, { useState } from 'react'
import './App.css'
import { useSafe } from './utils/SafeProvider'
import './index.js'
import './index.css'

const App = () => {
  const safe = useSafe()
  const [input, setInput] = useState("Initial")
  const submitTransaction = React.useCallback(() => {
    setInput(input + "+")
    safe.sendTransactions([{
      to: safe.getSafeInfo().safeAddress,
      data: "0x",
      value: 0
    }])
  }, [safe, input])
  return(
    <>
    <head>
      <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" type="text/css" href="index.css"/>
    </head>
    <body id="home">
    <div id="offcanvas-left">
                  <ul>
                    <li><a href="#" >Portfolio Performance </a></li>
                    <li><a href="#" >Transactions </a></li>
                    <li><a href="#" >Locked in DeFi </a></li>
                  </ul>
              </div>
              <div id="togglebar">
                  <div id="toggle">
                      <i id="fa fa-bars"></i>
                  </div>
              </div>
        <div id="center">
            <header>
                <nav>
                    <ul>
                        <li><a href="#" >Today </a></li>
                        <li><a href="#" >Last month </a></li>
                        <li><a href="#" >Last year </a></li>
                        <li><a href="#" >All time </a></li>
                    </ul>
                </nav>
            </header>
            <section>
                <main>
                    <article>
                        <figure id="hero">
                            <img src="/Users/Lukas/sapp-tx-builder/public/meme.jpeg" alt="A laptop with a mouse on a desk and a pair of glasses."/>
                            <figcaption>
                                The figure image caption
                            </figcaption>
                        </figure>
                         -->
                    </article>
                </main>
            </section>          
            <footer>
            </footer>
        </div>
        <script type="text/javascript" src="index.js"></script>
    </body>
</>)
}

export default App
