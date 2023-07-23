import Header from "@/components/Header"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        Hello World
        {/* ログイン画面とログアウト画面へのリンク */}
        <a href="/signin">Sign In</a>
        <a href="/signout">Sign Out</a>
      </main>
    </>
  )
}

export default Home