import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

  const deletePatient = usePatientStore(state => state.deletePatient)
  const getPatientById = usePatientStore(state => state.getPatientById)

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

        <PatientDetailItem label="ID"data={patient.id} />
        <PatientDetailItem label="Nombre"data={patient.name} />
        <PatientDetailItem label="Propietario"data={patient.caretaker} />
        <PatientDetailItem label="Email"data={patient.email} />
        <PatientDetailItem label="Fecha Alta"data={patient.date.toString()} />
        <PatientDetailItem label="Sintomas"data={patient.symptoms} />

        <div className="flex justify-between mt-10 flex-col lg:flex-row gap-3">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
            onClick={() => getPatientById(patient.id)}
          >Editar
          </button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
            onClick={() => { 
              
            deletePatient(patient.id)
            toast.error('¡Eliminado con Exito!')
          
          }}
          >Eliminar
          </button>
        </div>
    </div>
  )
}
