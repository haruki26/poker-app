import { UserInfo } from "../../../game/types";
import Btn from "../../Btn";

type Props = {
    users: Readonly<Pick<UserInfo, "name" | "role">>[]; // ユーザー一覧
    setRole: (index: number) => void; // ユーザー情報を更新する関数
};

const DBChange: React.FC<Props> = ({ users, setRole }) => {
    const userInfos = users.map((user) => ({
        name: user.name,
        isDB: user.role === "DB",
    }));

    return (
        <div className="p-4 w-full h-full bg-gray-100 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Assign Dealer Button (DB)</h1>
            <ul className="flex flex-col gap-3">
                {userInfos.map((user, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white p-2 rounded shadow"
                    >
                        <div className="flex gap-3 text-lg">
                            <span className="text-gray900 after:content-[' ']">
                                {user.name}
                            </span>
                            {user.isDB && <span className="text-green-500">(DB)</span>}
                        </div>
                        <Btn
                            onClick={() => setRole(index)}
                            className={`w-24 ${
                                user.isDB
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-700"
                            }`}
                            disabled={user.isDB} // DB に設定済みなら無効化
                        >
                            {user.isDB ? "Assigned" : "Set DB"}
                        </Btn>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DBChange;