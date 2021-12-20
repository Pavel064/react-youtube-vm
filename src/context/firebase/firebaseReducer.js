import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types"

const handlers = {

    /* добавляем кейс SHOW_LOADER - принимаем state, возвращаем объект стейта,
     у которого флаг loading будет находиться в значении true
    */

    [SHOW_LOADER] : state => ({...state, loading: true}),

    /* следующий кейс, который добавим - ADD_NOTE; он будет принимать в себя 
    state, и y action сразу забираем объект payloaded;
    на выходе будем возвращать развернутый state, и дальше объекту notes 
    будем присваивать значение старого state, массива notes, и сюда нужно
    добавить новую note, которая будет находиться в объекте payload
    payload будет объектом note
    */

    [ADD_NOTE] : (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),

    /*
    принимаем стейт, пейлоад, который получаем из экшена, на выходе возвращаем
    объект развёрнутый, стейт и просто массиву нотс будем присваивать 
    значение пейлоад
    */

    [FETCH_NOTES] : (state, {payload}) => ({
        ...state,
        notes: payload,
        loading: false
    }),

    /*
    этот экшн принимает в себя стейт и пейлоад, где будет храниться айдишник 
    удаленной ноте; на выходе возвращаем новый стейт;
    далее нам надо изменить массив нотс, путём удаления нужного элемента,
    т.е. обращаемся к стейт.нотс, вызываем метод филтер, где на каждой
    итерации  будем получать ноте, и будем проверять, что если ноте.id 
    не равняется пейлоад, тогда мы его удаляем
    */

    [REMOVE_NOTE] : (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
    }),

    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    /* создаём объект handle из объекта handlers по ключу action.type;
    если его нет, то возвращаем handlers.DEFAULT */ 
    const handle = handlers[action.type] || handlers.DEFAULT 
    return handle(state, action)
}
