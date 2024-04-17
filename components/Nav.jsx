"use client";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          alt="share prompt logo"
          className="object-contain"
        />
        <p className="logo_text">Share-prompt</p>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image || "/assets/images/logo.svg"}
                width={37}
                height={37}
                alt="share prompt logo"
                className="rounded-full  cursor-pointer"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn mx-1"
                >
                  {provider.id}
                </button>
              ))}
          </>
        )}{" "}
      </div>

      {/* mobile */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image || "/assets/images/logo.svg"}
              width={37}
              height={37}
              alt="share prompt logo"
              className="rounded-full cursor-pointer"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn mx-1"
                >
                  {provider.id}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
