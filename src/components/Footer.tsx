import Image from "next/image";
import Link from "next/link";
import Social from "./Social";
import social from "@/config/social.json";
import { menuData } from "@/static/data";

export default function Footer() {
  return (
    <>
      <footer className="section relative mt-12 pt-[70px] pb-[50px]">
        <Image
          className="-z-[1] absolute min-h-full inset-0 block object-cover object-left  md:object-top"
          src="/images/footer-bg-shape.svg"
          alt="footer background"
          fill={true}
        />
        <div className="container mx-auto text-center">
          <div className="mb-6 inline-flex">
            <Image
              src="/swastik-logo.png"
              alt="Swastik Manpower"
              width="50"
              height="60"
            />
          </div>
          <div className="max-w-[638px] mx-auto">
            <p>
              AT Swastik Security & Manpower Services we mobilize the right
              people, skills and technology to help our valued client improve
              their performance.
            </p>
          </div>
          {/* footer menu */}
          <ul className="mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4">
            {menuData.map((menu) => (
              <li className="inline-block" key={menu.name}>
                <Link
                  href={`${menu.url}/`}
                  className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* social icons */}
          <div className="inline-flex">
            <Social source={social} className="socials mb-12 justify-center" />
          </div>
          {/* <p>
            © {new Date().getFullYear()} Swastik Manpower. All rights reserved.
          </p> */}
        </div>
      </footer>
      <footer className="bg-gray-900 text-gray-300">
        {/* <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-white">MySite</h3>
              <p className="mt-3 text-sm text-gray-400">
                Building modern web experiences with performance and scalability
                in mind.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/work" className="hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase text-white">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Web Development</li>
                <li>UI / UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase text-white">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@mysite.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>India</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MySite. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
