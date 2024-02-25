import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getPosts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Dive into a World of Diverse Discoveries: Your One-Stop Blog for
          Curious Minds Welcome to your personal portal to a universe of
          exploration! This blog isn't just a collection of articles; it's an
          adventure playground for your intellect and imagination. We delve into
          a kaleidoscope of topics, offering something to ignite every spark of
          curiosity This blog is more than just a collection of words; it's a
          conversation. We encourage you to engage with our content, share your
          thoughts, and participate in discussions. Let's explore, learn, and
          grow together, one article at a time..
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-400 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction></CallToAction>
      </div>

      <div className="max-6-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="mt-6 flex gap-8 flex-wrap justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-400 text-center hover:underline"
            >
              <p className="mt-10">View all Posts</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
