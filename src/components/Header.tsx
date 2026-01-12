"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToSection, throttle } from "@/helper/common";
import Link from "next/link";
import { menuData } from "@/static/data";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [sticky, setSticky] = useState<string>("");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();

    if (link.includes("#") && pathname === "/") {
      // Scroll smoothly within the same page
      scrollToSection(link);

      // Update URL hash without reloading
      window.history.pushState(null, "", link);
    } else {
      // Normal navigation to another page
      router.push(link);

      if (pathname === "/") {
        scrollToSection(link);
      }
    }
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(function handleScrolls() {
        const scrollY = window.scrollY;

        const stickyVal = scrollY > 2 ? " header-sticky fixed" : "no-sticky";
        setSticky(stickyVal);
        console.log(scrollY);
      }, 200)
    );
  }, [sticky]);

  return (
    <>
      <header
        className={`header ${sticky} left-0 right-0 top-0 z-50 bg-white transition-all duration-300 lg:bg-transparent`}
      >
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0">
            <Link href="/">
              <Image
                src="/swastik-logo.png"
                height={80}
                width={60}
                alt="logo"
              />
            </Link>
          </div>
          {/* navbar toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center lg:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          <ul
            id="nav-menu"
            className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-right lg:space-x-5"
          >
            {menuData.map(
              (item) =>
                !Object.hasOwn(item, "header") && (
                  <li key={item.url} className="nav-item">
                    {item.name === "Contact" ? (
                      <Link className="btn btn-white btn-sm" href={item.url}>
                        Contact Us
                      </Link>
                    ) : (
                      <Link
                        href={item.url}
                        className="nav-link"
                        onClick={(e) => handleNavClick(e, item.url)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                )
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
