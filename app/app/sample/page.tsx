// このページはセッションを満たしていない場合はサインインへのリンクを表示する
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Sample = async () => {
    // サーバーコンポーネントでセッションを取得
    const session = await getServerSession(authOptions);
    const user = session?.user;

    return (
        <div>
            {/* セッションの状況に応じて表示するものを分岐 */}
            {user != null ? (
                <div>
                    <h1>Sample</h1>
                    <p>Sample page</p>
                </div>
            ) : (
                <div>
                    <a href="/signin">Sign in</a>
                </div>
            )}
        </div>
    );
};

export default Sample;