import { Button } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-10 border border-pink-300 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center ">
      <div className="flex-0 flex flex-col">
        <h2 className="text-3xl">
          Want to learn more about Computer Science and Technology?
        </h2>
        <p className="text-gray-500 my-2">
          Gain new knowledge and develop your skills with us!
        </p>
        <Button
          className="rounded-tl-xl rounded-bl-none bg-gradient-to-r "
          gradientDuoTone="purpleToBlue"
          size="md"
        >
          <BsInstagram className="mr-2"></BsInstagram>
          <a
            href="https://www.instagram.com/makkentosh1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram{" "}
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://1office.vn/wp-content/uploads/2023/10/video-marketing-tiep-thi-video.webp"></img>
      </div>
    </div>
  );
}
