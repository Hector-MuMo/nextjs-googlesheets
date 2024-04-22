import { useId } from "react"

interface DataTableProps {
    data: [[]]
}

export default function DataTable({ data }: DataTableProps) {
    const id = useId()

    const table = data.length > 0
        ? data.map(item => item.map((info) => <span key={id + "-" + info} className="break-words text-center border-b">{info}</span>))
        : <div>'No data available'</div>

    return (
        <div className="grid grid-cols-5">
            <div className="border text-center font-bold text-base">Id</div>
            <div className="border text-center font-bold text-base">Nombre</div>
            <div className="border text-center font-bold text-base">Apellidos</div>
            <div className="border text-center font-bold text-base">Email</div>
            <div className="border text-center font-bold text-base">Telefono</div>
            {table}
        </div>
    )
}