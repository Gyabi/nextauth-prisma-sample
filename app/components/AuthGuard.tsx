"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }): any => {
  // status には、authenticated・unauthenticated・loading のいずれかが格納されます
  const { status } = useSession();
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (status === "unauthenticated" && path != "/signin")
      router.push("/signin");
  }, [router, status]);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "authenticated") return children;
};

export default AuthGuard;