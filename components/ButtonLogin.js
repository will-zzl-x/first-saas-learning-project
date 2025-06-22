"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

// This button is used to log users in or send them to the dashboard
const ButtonLogin = ({ session, extraStyle }) => {
  const dashboardUrl = "/dashboard";
  if (session) {
    return (
      <Link
        href={dashboardUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome Back, {session.user.name || "friend"} !
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashboardUrl });
      }}
    >
      Get started
    </button>
  );

  //1. Create a /login page
  //2. Create a email/password form
  // 3. Make a POST request
};

export default ButtonLogin;
