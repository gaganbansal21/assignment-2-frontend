import logo from './logo.svg';
import './App.css';
import Pagination from './components/pagination';
import Cardlist from './components/cardList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/index';
// import HoverContainer from './components/hoverContainer/index.js';


// const products = [
//   {
//     "_id":"HiUndfksjndsjn",
//       "model": "The Cash Cow",
//       "currentPrice": 40,
//       "variants":[{
//           "color": "Blue",
//           "image": "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_750x.jpg?v=1691615687",
//           "_id":"HiIamunique",
//       },
//       {
//           "color": "brown",
//           "image": "https://www.goorin.com/cdn/shop/files/101-0383-KHA-F01_750x.jpg?v=1691615687",
//           "_id":"yaIamUnique",
//       }
//   ],
//   "rating": 3
//   },
// ];

function App() {

  const [products,setProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [totalPages,setTotalPages] = useState(1);
  const API_ENDPOINT = "https://assignment2-backend-eight.vercel.app/api/";
  const second_api = "https://assignment2-backend-eight.vercel.app/api/data"

  const [count,setCount] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(second_api, {
          params: {
            currentPage,
            productsPerPage
          },
        });
    
        console.log("response", response);
        // Use response.data directly, as it's already parsed JSON
        setProducts(response.data.products);
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClick = () =>{
      console.log(count);
      setCount(count + 1);
  }

  return (
    <>
    <Navbar count={count}/>
    <div className="app">
      <br></br>
      <br></br>
      <Cardlist className="Cardlist_box" users={products} onCLick={handleClick} />
      <Pagination className="page_paginater" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
    {/* <HoverContainer /> */}
    </>
  );
}

export default App;
