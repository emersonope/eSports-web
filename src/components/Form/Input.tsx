import { InputHTMLAttributes } from "react";

//o componente do react recebe todos os atibutos que um elemento do html receberia
interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            placeholder="Selecione o game que deseja jogar"
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />
    )
}