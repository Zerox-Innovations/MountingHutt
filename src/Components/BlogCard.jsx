import React from 'react';

// Sample data for blog posts
const blogPosts = [
  { id: 1, title: 'Exploring the Serene Trails of Himachal Pradesh', date: 'Jan 20, 2024', image: 'https://via.placeholder.com/50', profileImage: 'https://via.placeholder.com/50' },
  { id: 2, title: 'The Best Hiking Routes in the Hills', date: 'Jan 18, 2024', image: 'https://images.pexels.com/photos/1194235/pexels-photo-1194235.jpeg?auto=compress&cs=tinysrgb&w=600', profileImage: 'https://via.placeholder.com/50' },
  { id: 3, title: 'Your Perfect Stay in Himachal: Cottage Life', date: 'Jan 15, 2024', image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', profileImage: 'https://via.placeholder.com/50' },
  { id: 4, title: 'The Beauty of Himachal’s Mountainous Landscape', date: 'Jan 10, 2024', image: 'https://images.pexels.com/photos/108120/pexels-photo-108120.jpeg?auto=compress&cs=tinysrgb&w=600', profileImage: 'https://via.placeholder.com/50' },
  { id: 5, title: 'What to Pack for Your Cottage Stay in Himachal', date: 'Jan 5, 2024', image: 'https://images.pexels.com/photos/18646435/pexels-photo-18646435/free-photo-of-lumineux-leger-paysage-montagnes.jpeg?auto=compress&cs=tinysrgb&w=600', profileImage: 'https://via.placeholder.com/50' },
];

const BlogCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center">
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Our Blogs
        </h2>
        <p className="mt-4 text-md font-medium text-gray-600 font-pj mb-8">
          Explore our collection of insightful articles about the beauty of Himachal Pradesh, <br />
          hiking trails, nature, and the unique stays in the region.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Content (Latest Post) */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">
              {blogPosts[0].title}
            </h1>
            <div className="w-full aspect-w-16 aspect-h-9 mb-6">
              <img
                src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Blog Image"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
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
                    <span className="text-sm text-gray-500">{post.date}</span>
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
}


export default BlogCard;