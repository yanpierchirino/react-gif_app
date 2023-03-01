import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState();
    const onAddCategory = (event)=> {
        event.preventDefault();
        const value =inputValue.trim();
        
        if (value.length <= 1) return;
        onNewCategory(value);
        setInputValue('');
    }

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    return (
        <form onSubmit={onAddCategory}>
            <input type="text" name="name" placeholder="Buscar Gif" value={inputValue} onChange={ onInputChange }/>
            <button type="submit" >Buscar</button>
        </form>
    )
}