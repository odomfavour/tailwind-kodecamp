import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/products');
      if (response.status === 200) {
        setProducts(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='min-h-screen'>
      {isLoading ? (
        <p className='text-center'>Loading</p>
      ) : (
        <div className='grid grid-cols-4 gap-5'>
          {products.length > 0 &&
            products.map((product) => {
              const { id, title, price, description, category, image, rating } =
                product;

              return (
                <Link
                  to={`/products/${id}`}
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
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Products;
