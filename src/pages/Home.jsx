import { Link } from "react-router";
import Hero from "../components/Hero";
import { getProducts } from "../data/Product";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row g-4">
          {getProducts().map((product) => (
            <div className="col-12 col-sm-6 col-md-3" key={product.id}>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
        
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="mb-0">$ { product.price }</p>
                  </div>

                  <div className="p-2 text-end">
                    <Link to={`/products/${product.id}`} className="text-decoration-none" style={{fontSize: "20px"}}>
                      🛒
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;