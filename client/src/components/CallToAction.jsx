import { Button } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-300 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to learn more about Computer Science and Technology?
        </h2>
        <p className="text-gray-500 my-2">
          Gain new knowledge and develop your skills with us!
        </p>
        <Button className="rounded-tl-xl rounded-bl-none bg-gradient-to-r from-pink-400 ">
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
        <img src="https://img.freepik.com/premium-vector/crossplatform-software-abstract-concept-vector-illustration_107173-25597.jpg"></img>
      </div>
    </div>
  );
}
