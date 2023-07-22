import AuthGuard from "@/components/AuthGuard"
import Header from "@/components/Header"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        Hello World

        <AuthGuard>
          <p>Authed</p>
        </AuthGuard>

        {/* ログイン画面とログアウト画面へのリンク */}
        <a href="/signin">Sign In</a>
        <a href="/signout">Sign Out</a>
      </main>
    </>
  )
}

export default Home