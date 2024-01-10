import React, { useContext } from "react";
import FormContext from "../formcontext/form.contex";

export const Pg3 = () => {
    const {
        password,
        rPassword,
        setPassword,
        setRPassword,
    } = useContext(FormContext)

    return (
        <form>
            <div className="mb-3">
                <label>
                    Password
                </label>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>

            <div className="mb-3">
                <label>
                    Repeat password
                </label>
                <input
                    value={rPassword}
                    onChange={(e) => {
                        setRPassword(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
        </form>
    );
}