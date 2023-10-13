import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/products');
      console.log(response);
      if (response.status === 200) {
        setProducts(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (item) => {
    console.log('item', item);
    let isINCart = cart.some((prod) => prod.id === item.id);
    if (!isINCart) {
      setCart([...cart, item]);
    }
    // console.log(updatedCart);

    // setCart([...cart, item]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='min-h-screen'>
      {isLoading ? (
        <p className='text-center'>Loading</p>
      ) : (
        <section>
          <p>Items in cart: {cart.length}</p>
          <div className='grid grid-cols-4 gap-5'>
            {cart.length > 0 &&
              cart.map((product) => {
                const {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                } = product;
                return (
                  <div
                    key={id}
                    className=' border border-orange-400 rounded-md p-4'
                  >
                    <img
                      src={image}
                      alt={description}
                      className='h-40  w-full object-scale-down'
                    />
                    <div>
                      <p>{title}</p>
                      <p>{description}</p>
                      <p>{category}</p>
                      <p>${price}</p>
                      <p>{rating.rate}</p>
                      <p className='flex'>
                        {[...Array(Math.round(rating.rate))].map((e, i) => (
                          <BsStarFill key={i} className=' text-yellow-600' />
                        ))}
                        {[...Array(5 - Math.round(rating.rate))].map((e, i) => (
                          <BsStar key={i} className='text-yellow-600' />
                        ))}
                      </p>
                      <div className='flex justify-between my-6'>
                        <button
                          onClick={() => addItem(product)}
                          className='py-3 px-5 rounded-md bg-blue-600 text-white'
                        >
                          Add to cart
                        </button>
                        <Link to={`/products/${id}`} className='text-blue-500'>
                          See Product
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <hr />
          <div className='grid grid-cols-4 gap-5'>
            {products.length > 0 &&
              products.map((product) => {
                const {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                } = product;
                return (
                  <div
                    key={id}
                    className=' border border-orange-400 rounded-md p-4'
                  >
                    <img
                      src={image}
                      alt={description}
                      className='h-40  w-full object-scale-down'
                    />
                    <div>
                      <p>{title}</p>
                      <p>{description}</p>
                      <p>{category}</p>
                      <p>${price}</p>
                      <p>{rating.rate}</p>
                      <p className='flex'>
                        {[...Array(Math.round(rating.rate))].map((e, i) => (
                          <BsStarFill key={i} className=' text-yellow-600' />
                        ))}
                        {[...Array(5 - Math.round(rating.rate))].map((e, i) => (
                          <BsStar key={i} className='text-yellow-600' />
                        ))}
                      </p>
                      <div className='flex justify-between my-6'>
                        <button
                          onClick={() => addItem(product)}
                          className='py-3 px-5 rounded-md bg-blue-600 text-white'
                        >
                          Add to cart
                        </button>
                        <Link to={`/products/${id}`} className='text-blue-500'>
                          See Product
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;
