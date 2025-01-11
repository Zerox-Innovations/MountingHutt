import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}admins/blogs/`);
        setBlogPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Assuming the first blog in the blogPosts array is the latest post
  const latestBlog = blogPosts[0];

  return (
    <div className="text-white py-10">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="mt-4 text-black">Our Blogs</h1>
          <p className="mt-2 text-md text-black font-pj mb-8">
            Explore our collection of insightful articles about the beauty of Himachal Pradesh, <br />
            hiking trails, nature, and the unique stays in the region.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Content (Latest Post) */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            {latestBlog && (
              <>
                <h1 className="text-3xl font-semibold mb-4 text-black">{latestBlog.title}</h1>
                <div className="w-full aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={latestBlog.image}
                    alt="Blog Image"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700">{latestBlog.description}</p>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-6">
              {/* Map through the blog posts (except the first one for the left side) */}
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="flex space-x-4">
                  <img
                    src={post.image}
                    alt="Post Image"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <a
                      href={`/post/${post.id}`}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {post.title}
                    </a>
                    <span className="text-sm text-gray-500">{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="/all-posts"
                className="text-blue-600 hover:underline font-semibold"
              >
                See All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
