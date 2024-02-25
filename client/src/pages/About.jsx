export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center mb-20">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font-semibold text-center my-7 ">
            About Mark's Blog
          </h1>
          <div className="flex justify-center items-center p-10 ">
            <img src="https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png"></img>
          </div>
          <div className="text-gray-500 flex flex-col gap-6 text-md dark:text-gray-200">
            <p className="font-semibold text-gray-800 text-2xl dark:text-white">
              Welcome to Mark's Blog!
            </p>
            <p>
              Mark's Blog is a space for curiosity, exploration, and (hopefully)
              a little bit of inspiration. Here, you'll find a diverse mix of
              content reflecting my interests, experiences, and ever-evolving
              perspective on the world.
            </p>
            <p>
              Whether you're looking for insightful commentary on current
              events, thought-provoking discussions on various topics, or simply
              a glimpse into my personal journey, I invite you to dive in and
              explore. My aim is to create a platform for open dialogue, shared
              learning, and maybe even a few laughs along the way.
            </p>
            <p>
              So, grab a cup of coffee (or tea, or whatever your beverage of
              choice may be), settle in, and let's embark on this journey
              together. I believe in the power of words to connect, inspire, and
              challenge, and I hope you'll find something valuable within these
              pages.
            </p>
            <p className="font-semibold">
              Here's what you can expect to find on Mark's Blog:
            </p>
            <p>
              A variety of topics: From personal reflections and creative
              endeavors to in-depth analysis and current events commentary, I
              cover a wide range of subjects to pique your interest and spark
              discussion. Authentic voice: My writing is honest and genuine,
              reflecting my unique perspective and experiences. I don't shy away
              from expressing my opinions, but I always strive to do so with
              respect and open-mindedness. Regular updates: I'm passionate about
              sharing my thoughts and ideas, so you can expect new content on a
              regular basis. Signup to stay informed about my latest posts and
              join the conversation!
            </p>
            <p>
              I'm excited to have you on board, and I can't wait to share my
              adventures in the world of words with you. Feel free to leave
              comments, share your thoughts, and engage in respectful dialogue.
              This blog is a community, and your voice matters!
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              Happy reading!
            </p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {" "}
              - Mark{" "}
            </p>
            <p>
              <strong className="text-gray-800 dark:text-white">P.S</strong> If
              you have any specific interests or questions, feel free to reach
              out to me directly. I'm always happy to connect with readers and
              discuss the topics that spark their curiosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
