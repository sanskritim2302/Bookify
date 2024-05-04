import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverNotFoundImg from "../../images/cover.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URL = "https://softwium.com/api/books";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setBook] = useState(null);
  const navigate = useNavigate();
  console.log(id) 
  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await axios.get(`${URL}/${id}`);
        const data = response.data;
        console.log(data);

        if (data) {
        
          
          setBook(data);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  },[]);

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={data?.cover_img || coverNotFoundImg} alt="cover img" /> 
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{data?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{data?.id}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Authors: </span>
              {data?.authors?.map((author, index) => (
                <span key={index} className='text-italic'>{author}</span>
              ))}
            </div>

            <div className='book-details-item'>
              <span className='fw-6'>Page Count: </span>
              <span className='text-italic'>{data?.pageCount}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>ISBN: </span>
              <span>{data?.isbn}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails