type ButtonProps = {
    label: string,
    onClick?: (e: any) => void
    type?: "button" | "submit"
}

const Button = ({ type, label, onClick }: ButtonProps) => {
    const typeBtn = type ? type : "button";
    const classBtn = "bg-slate-100 text-slate-800 cursor-pointer";

    return (
        <button type={typeBtn}
            onClick={onClick}
            className={`px-2 py-1 mt-2 rounded-md font-semibold outline-none ${classBtn} transition ease-in-out duration-150`}>
            {label}
        </button>
    )
};

export default Button;