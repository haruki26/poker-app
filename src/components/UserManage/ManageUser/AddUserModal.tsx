import { useContext, useState } from "react";
import ModalFrame from "../../Modal/ModalFrame"
import InputForm from "../../InputForm";
import Btn from "../../Btn";
import { ManageContext } from "../ManageContext";

const AddUserModal: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [chip, setChip] = useState<number>(200);
    const { handleAddUser, closeModal } = useContext(ManageContext);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddUser(name, chip);
        console.log("Add User");
        closeModal();
    };

    return (
        <ModalFrame modalName="Add User" closeModal={closeModal}>
            <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-zinc-400">
                        Name
                    </label>
                    <InputForm
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="p-1 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="chip" className="text-zinc-400">
                        Chip
                    </label>
                    <InputForm
                        onChange={(e) => setChip(Number(e.target.value))}
                        value={chip}
                        className="p-1 rounded-md"
                        isNumber={true}
                    />
                </div>
                <div className="flex justify-center">
                    <Btn
                        type="submit"
                        className="p-1 rounded-md"
                    >
                        <span className="text-zinc-300 text-xl font-extrabol p-2">
                            Add
                        </span>
                    </Btn>
                </div>
            </form>
        </ModalFrame>
    );
};

export default AddUserModal;
