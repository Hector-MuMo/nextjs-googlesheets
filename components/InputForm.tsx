type InputFormProps = {
    label?: string,
    id: string,
    type?: string,
    placeholder?: string,
    onChange?: (e: any) => void
}

const InputForm = ({ label, type, id, placeholder, onChange }: InputFormProps) => {
    const typeForm = type ? type : "text";

    return (
        <div className="flex flex-col gap-1 transition-all duration-150 ease-in-out">
            {label ? <label htmlFor={id} className="text-slate-500 text-sm">{label}</label> : <></>}

            <input type={typeForm} id={id} name={id} placeholder={placeholder} onChange={onChange}
                className={`px-2 py-1 rounded-md outline-none bg-slate-700 bg-opacity-50 border border-slate-700
          focus:bg-white focus:border-opacity-0 focus:ring focus:ring-slate-700 focus:text-slate-800`} />
        </div>
    )
}

export default InputForm;