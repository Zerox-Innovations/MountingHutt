import React from 'react';
import Navbar from '../../Navbar';
import blogImage from '../../../images/blogs.png'; // Update this with the correct path to your image
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Button } from 'bootstrap';

const BlogDetailList = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center gap-16 items-center  p-8 mt-10">
        {/* Heading Section */}
        <div className=" text-center md:text-left">
          <div className=' flex justify-center items-center'>

            <h1 className="text-5xl font-bold text-blue-700 mb-6">
              Discover Our Stories
            </h1>
            {/* <p className="text-lg text-gray-600 text-start">
            Dive into inspiring travel tales, tips, and experiences. Let us take you on a journey through captivating narratives and insightful articles.
          </p> */}
          </div>
        </div>

        {/* Image Section */}
        <div className=" flex justify-center">
          <img
            src={blogImage}
            alt="Blog Illustration"
            className="max-w-md h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center p-8">
        <hr className="w-full max-w-5xl border-t border-gray-750" />
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt="Noteworthy technology acquisitions 2021"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogDetailList;
