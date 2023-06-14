import React from "react";
import "./InputCheckBox.css"
const InputCheckbox: React.FC<{
    label: string;
    isChecked: boolean;
    setChecked: (value: React.SetStateAction<boolean>) => void;
}> = ({ isChecked, setChecked, label }) => {
    return (
        <label className="container">
            <div className="containerChecked">
                {isChecked && (
                    <span className="checked"></span>
                )}
            </div>
            <span className="label">{label}</span>
            <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => setChecked((prev: boolean) => !prev)}
            />
        </label>
    );
};
export default InputCheckbox