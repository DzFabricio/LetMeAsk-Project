
import { createContext, ReactNode, useEffect, useState } from "react";         //<- useeffetc usado  para controlar informaçoes que mudam
import { auth, firebase } from "../services/firebase";                         //useEffect é um hook disparado quando AuthContextProvider é exibido em tela
// e fica observando se ouve alguma alteração na autentificação do usuario
//que  serve pra recuperar informação, caso ele de f5 ou feche a pagina                                      
type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {              //importar ReactNode pois o tipo de children do componente do react é uma react node não uma string
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);


export function AutoContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect(() => {                                                //é recomendado que salve esse evento listener em uma variavel e unsubscribe é para parar de ouvir o event listener
        const unsubscribe = auth.onAuthStateChanged(user => {          //vai ficar ouvindo o evento, se o usuario ja logou anteriormente ele vai retornar o usuario
            if (user) {                                                  // fica monitorando se ja existe um log in pré feito pelo usuario, se sim ele faz o abaixo
                const { displayName, photoURL, uid } = user                // verificar se o usuario tem informações dentro dele e preenche o estado


                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.');
                }


                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }

        })
        return () => {               //fazer o retorno do useeffect para descadastrar dos evento cadastrados, mas só se tiver em um eventlistener
            unsubscribe();
        }


    }, [])                  //{} <- função na qual quero executar e [] quando quero que execute(sempre sera array)

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);


        if (result.user) {
            const { displayName, photoURL, uid } = result.user


            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account.');
            }


            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }         //abaixo conteudo dentro de propriedades vira children


    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>                                          //não esquecer do props.children




    );
}