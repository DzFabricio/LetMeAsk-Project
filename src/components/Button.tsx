import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {                            //props pega todas as propriedades desse botão e passa pro botão html {...props}

    return (
        <button className="button"{...props} />
    )

}

<Button />