'use client'

import AddUser from "@/components/AddUser";
import DataTable from "@/components/DataTable";
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
    })
    const [successPost, setSuccessPost] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formValues = Object.values(formData);
        if (formValues.includes("")) {
            return;
        } else {
            try {
                console.log(JSON.stringify(formData))
                const response = await fetch('api/postSheetData', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                })
                const data = await response.json();
                console.log(data);
                setSuccessPost(!successPost);
            } catch (error) {
                console.log(error)
            }

        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('api/getSheetData');
            const data = await response.json();
            data.shift()
            setData(data);
        }

        fetchData()
    }, [successPost])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <DataTable data={data} />
            </div>
            <hr />
            <div className="mt-20">
                <h2 className="py-5 text-lg">Add a new user</h2>
                <AddUser formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            </div>
        </main>
    );
}
