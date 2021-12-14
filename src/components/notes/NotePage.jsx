import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                >

                </textarea>
            </div>


            <div className="notes__image">
                <img
                    src="https://img.freepik.com/vector-gratis/escena-naturaleza-rio-colinas-bosque-montana-ilustracion-estilo-dibujos-animados-planos-paisaje_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.1908636980.1633564800"
                    alt="imagen"
                />
            </div>

        </div>
    )
}
