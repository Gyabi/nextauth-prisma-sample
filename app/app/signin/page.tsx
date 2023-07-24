"use client";
// サインイン用のボタンコンポーネント
// signIn()を実行すると、/api/auth/signin にリクエストを送信し、認証画面へ飛ぶ
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
        <div>
            <button
            onClick={() => signIn()}
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
            >
            signin
            </button>
        </div>
    </>
  );
};

export default SignIn;