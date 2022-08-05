import { useRouter } from "next/router"

export default function Produtos() {

    const router = useRouter()

    const { id } = router.query

    return <h1> Produto { id }</h1>
}