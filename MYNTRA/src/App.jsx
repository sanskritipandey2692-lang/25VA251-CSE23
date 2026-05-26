import { useState } from 'react'
import products from './data'

function App() {

  const [search, setSearch] = useState('')
  const [bagCount, setBagCount] = useState(0)

  const addToBag = () => {
    setBagCount(bagCount + 1)
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>

      {/* HEADER */}

      <header>

        <div className="logo">
          Myntra
        </div>

        <nav>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Beauty</a>
          <a href="#">Home</a>
          <a href="#">GenZ</a>
          <a href="#">Studio</a>
        </nav>

        {/* SEARCH */}

        <input
          className="search"
          type="text"
          placeholder="Search for products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* ICONS */}

        <div className="icons">
          <span>Profile</span>
          <span>Wishlist</span>
          <span>Bag ({bagCount})</span>
        </div>

      </header>


      {/* BANNER */}

      <div className="banner">
        BIG FASHION SALE - UP TO 70% OFF
      </div>


      {/* CATEGORY */}

      <div className="categories">

        <div className="category">Topwear</div>
        <div className="category">Fashion</div>
        <div className="category">Shoes</div>
        <div className="category">Accessories</div>
        <div className="category">Watches</div>

      </div>


      {/* PRODUCTS */}

      <div className="section">

        <h2>Trending Products</h2>

        <div className="products">

          {filteredProducts.map((product) => (

            <div className="card" key={product.id}>

              <div className="badge">
                {product.badge}
              </div>

              <img
                src={product.image}
                alt={product.title}
              />

              <h3>{product.title}</h3>

              <div className="rating">
                {product.rating}
              </div>

              <p className="price">
                {product.price}
              </p>

              <button
                className="btn"
                onClick={addToBag}
              >
                Add to Bag
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* NEWSLETTER */}

      <div className="newsletter">

        <h2>
          Subscribe for Exclusive Offers
        </h2>

        <p>
          Get fashion deals straight to your inbox
        </p>

        <br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>
          Subscribe
        </button>

      </div>


      {/* FOOTER */}

      <footer>

        <p>
          © 1996-2026, Myntra Clone
        </p>

      </footer>

    </>
  )
}

export default App