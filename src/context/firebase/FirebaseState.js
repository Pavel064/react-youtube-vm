import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";

/* данная функция принимает в себя параметр children
Основная идея state заключается в том, что мы просто оборачиваем всё приложение
в этот state, для того чтобы дочерние элементы имели доступ до состояния контекста */

export const FirebaseState = ({children}) => {

    /* создаём объект state с функцией dispatch(отправлять) 
    из функции useReducer, куда передаём сам reducer - firebaseReducer,
    а также передаём параметр initialState
    */
    const initialState = { // какие базовые значения параметра:
        notes: [], // массив notes пустой
        loading: false // флаг loading по умолчанию false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    return (
        <FirebaseContext.Provider value={{ // в качестве провайдера передаю объект

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
