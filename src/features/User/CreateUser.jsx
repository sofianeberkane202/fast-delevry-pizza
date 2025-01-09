import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getName } from "./reducerUserSlice";
import { useState } from "react";

/* eslint-disable react/react-in-jsx-scope */
function CreateUser() {
  const userName = useSelector((state) => getName(state));
  console.log(userName);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName) dispatch(createUser(name));

    navigate("/menu");
  }
  return (
    <form className="flex flex-col items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
      {!userName ? (
        <>
          <input
            type="text"
            placeholder="Your full name"
            className="w-72 rounded-full px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring focus:ring-yellow-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type={"primary"}>start ordering</Button>
        </>
      ) : (
        <Button type={"primary"}>continue ordering, {userName}</Button>
      )}
    </form>
  );
}

export default CreateUser;
