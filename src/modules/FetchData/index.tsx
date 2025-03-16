import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setData } from "../../assets/redux/slices/dataSlice"

const DataFetcher = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
                const data = await response.json()
                dispatch(setData(data))
            } catch (error) {
                console.error("Erro ao buscar dados:", error)
            }
        }

        fetchData()
    }, [dispatch])

    return null  // Esse componente apenas executa a requisição, não renderiza nada
}

export default DataFetcher
