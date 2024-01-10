import React, {useContext} from "react";
import FormContext from "../formcontext/form.contex";

export const Pg2 = () => {
    const {
        phone, 
        rPhone,
        setPhone,
        setRPhone
    } = useContext(FormContext);

    return (
        <form>
            <div className="mb-3">
                <label>
                    Phone number
                </label>
                <input
                    value={phone}
                    onChange={(e)=>{
                        setPhone(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Repeat phone
                </label>
                <input
                    value={rPhone}
                    onChange={(e)=>{
                        setRPhone(e.target.value);
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