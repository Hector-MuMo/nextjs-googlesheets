
type UserData = {
    Id: string,
    Nombre: string,
    Apellidos: string,
    Email: string,
    Telefono: string
}

type InputFormProps = {
    label?: string,
    id: string,
    type?: string,
    placeholder?: string,
    onChange?: (e: any) => void
}

type ButtonProps = {
    label: string,
    onClick?: (e: any) => void
    type?: "button" | "submit"
}

type AddUserProps = {
    formData: UserData,
    setFormData: any,
    handleSubmit: (e: any) => void
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

const AddUser = ({ formData, setFormData, handleSubmit }: AddUserProps) => {

    const InputOnChange = (e: any) => {
        switch (e.target.id) {
            case 'Id':
                setFormData({ ...formData, Id: e.target.value });
                return;
            case 'Nombre':
                setFormData({ ...formData, Nombre: e.target.value });
                return;
            case 'Apellidos':
                setFormData({ ...formData, Apellidos: e.target.value });
                return;
            case 'Email':
                setFormData({ ...formData, Email: e.target.value });
                return;
            case 'Telefono':
                setFormData({ ...formData, Telefono: e.target.value });
                return;
            default:
                break;
        }
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <InputForm id="Id" label="Id" onChange={InputOnChange} />
            <InputForm id="Nombre" label="Nombre" onChange={InputOnChange} />
            <InputForm id="Apellidos" label="Apellidos" onChange={InputOnChange} />
            <InputForm id="Email" label="Email" onChange={InputOnChange} />
            <InputForm id="Telefono" label="Telefono" onChange={InputOnChange} />
            <Button type="submit" label="Send" />
        </form>
    )
};

export default AddUser;