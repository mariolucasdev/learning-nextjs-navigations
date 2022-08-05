import { useRouter } from "next/router"
import Link from "next/link";

export default function Categoria() {

    const router = useRouter();
    const { categoria, id } = router.query

    function enviarFormulario() {
        router.push('/produtos/sucesso')
    }

    return <div> Categoria - { categoria }

        <button onClick={enviarFormulario}> Enviar Formulário   </button>
        
        <ul>
            <li>
                <Link href="/produtos/doces">
                    <a> Doces { categoria == 'doces' ? id : null} </a>
                </Link>
            </li>
            <li>
                <Link href="/produtos/cosmeticos">
                    <a> Cosméticos { categoria == 'cosmeticos' ? id : null}</a>
                </Link>
            </li>
        </ul>
    </div>
}