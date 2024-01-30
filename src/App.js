import logo from './logo.svg';
import './App.css';
import Pagination from './components/pagination';
import Cardlist from './components/cardList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/index';

function App() {

  const [products,setProducts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [totalPages,setTotalPages] = useState(1);
  const API_ENDPOINT = "https://assignment2-backend-eight.vercel.app/api/";
  const second_api = "https://assignment2-backend-eight.vercel.app/api/data"

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

  return (
    <div className="app">
      <Navbar />
      <br></br>
      <br></br>
      <Cardlist className="Cardlist_box" users={products} />
      <Pagination className="page_paginater" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
