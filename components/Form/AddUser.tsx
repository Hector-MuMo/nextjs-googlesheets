import Button from "../Input/Button";
import InputForm from "../Input/InputForm";

type AddUserProps = {
    formData: UserData,
    setFormData: any,
    handleSubmit: (e: any) => void
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