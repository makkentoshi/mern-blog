import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsDiscord,
  BsLinkedin,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-4 border-pink-400  rounded-lg  "
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-2xl">
                Mark&amp;s
              </span>
              <span className="text-2xl font-bold">Blog</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  My website & projects
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  About me
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/makkentoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/makkentoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider></Footer.Divider>

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Mark's blog"
            year={new Date().getFullYear()}
          ></Footer.Copyright>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://github.com/makkentoshi"
              icon={BsGithub}
            ></Footer.Icon>
            <Footer.Icon href="#" icon={BsYoutube}></Footer.Icon>
            <Footer.Icon href="#" icon={BsDiscord}></Footer.Icon>
            <Footer.Icon href="#" icon={BsTwitterX}></Footer.Icon>
            <Footer.Icon href="#" icon={BsInstagram}></Footer.Icon>
            <Footer.Icon href="#" icon={BsLinkedin}></Footer.Icon>
            <Footer.Icon href="#" icon={BsFacebook}></Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  );
}
