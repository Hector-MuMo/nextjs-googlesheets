import Button from "./Button";
import InputForm from "./InputForm";

type UpdateUserProps = {
    formData: UserData,
    setFormData: any,
    handleSubmit: (e: any) => void
}

const UpdateUser = ({ formData, setFormData, handleSubmit }: UpdateUserProps) => {

    const InputOnChange = (e: any) => {
        switch (e.target.id) {
            case 'Range':
                setFormData({ ...formData, Range: e.target.value });
                return;
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
            <InputForm id="Range" label="Range" onChange={InputOnChange} />
            <InputForm id="Id" label="Id" onChange={InputOnChange} />
            <InputForm id="Nombre" label="Nombre" onChange={InputOnChange} />
            <InputForm id="Apellidos" label="Apellidos" onChange={InputOnChange} />
            <InputForm id="Email" label="Email" onChange={InputOnChange} />
            <InputForm id="Telefono" label="Telefono" onChange={InputOnChange} />
            <Button type="submit" label="Update" />
        </form>
    );
};

export default UpdateUser;