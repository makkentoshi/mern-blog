import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3 text-center">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div>
        <img src="https://em-content.zobj.net/source/apple/354/heart-hands_1faf6.png"></img>
      </div>
      <p className="text-xl text-gray-500 dark:text-gray-200">
        Build fun and engaging projects while learning HTML , CSS and
        Javascript!
      </p>
      <CallToAction></CallToAction>
    </div>
  );
}
