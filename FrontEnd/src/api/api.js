
const API = "http://localhost:3000";

export async function obtenerTareas() {
    const respuesta = await fetch(`${API}/tareas`)
    
    if(!respuesta.ok){
        throw new Error("Error al obtener tareas")
    }
    return respuesta.json()
}


