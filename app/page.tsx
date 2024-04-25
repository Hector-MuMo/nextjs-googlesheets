'use client'

import AddUser from "@/components/Form/AddUser";
import DataTable from "@/components/DataTable";
import DeleteUser from "@/components/Form/DeleteUser";
import UpdateUser from "@/components/Form/UpdateUser";
import { deleteData, fetchData, postData, updateData } from "@/utils/crudSheetData";
import { useEffect, useState } from "react";

type UserData = {
    Id: string,
    Nombre: string,
    Apellidos: string,
    Email: string,
    Telefono: string
}

export default function Home() {
    const [data, setData] = useState<[[]]>([[]]);
    const [formData, setFormData] = useState<UserData>({
        Id: "",
        Nombre: "",
        Apellidos: "",
        Email: "",
        Telefono: ""
    });
    const [rangeToDelete, setRangeToDelete] = useState<string>("");
    const [successAction, setSuccessAction] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formValues = Object.values(formData);
        const formKeys = Object.keys(formData);

        if (rangeToDelete.length > 0) {
            setSuccessAction(await deleteData(rangeToDelete, successAction));
            setRangeToDelete("");
            return;
        }

        if (formValues.includes("")) {
            return;
        } else if (formKeys.includes("Range")) {
            console.log(formData)
            setSuccessAction(await updateData(formData, successAction));
            setFormData({
                Id: "",
                Nombre: "",
                Apellidos: "",
                Email: "",
                Telefono: ""
            });
            return;
        } else {
            setSuccessAction(await postData(formData, successAction));
        }
    }

    useEffect(() => {
        const resolvePromise = async () => {
            setData(await fetchData());
        }

        resolvePromise()
    }, [successAction])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <DataTable data={data} />
            </div>
            <hr />
            <div className="flex mt-20">
                <div className="px-5">
                    <h2 className="py-5 text-lg">Add a new user</h2>
                    <AddUser formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                </div>
                <div className="px-5">
                    <h2 className="py-5 text-lg">Update user</h2>
                    <UpdateUser formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                </div>
                <div className="px-5">
                    <h2 className="py-5 text-lg">Delete user</h2>
                    <DeleteUser setFormData={setRangeToDelete} handleSubmit={handleSubmit} />
                </div>
            </div>
        </main>
    );
}
