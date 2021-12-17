import * as S from './styles'
import {getUser} from '../../services/getUser'
import { useEffect, useState } from 'react'


export const Home = () => {
const [user, setUser] = useState('luishenriquetp')

useEffect(()=>{
    getUser({setUser})
    
},[])



    return (
        <S.Container>
        <S.Interface>
            <input placeholder="Digite o termo a ser pesquisado"/>
            <button>Enviar</button>
            <ul>
                {user.map(item => (
                    <li>{item.login}</li>
                ))}
            </ul>
        </S.Interface>
    </S.Container>
    )
}