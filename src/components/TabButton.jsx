function TabButton({label, onSelect, isSelected}){ // [2]          //function TabButton(props) { [1]
    // props.children is used to acces the content between the opening
    // and closing tags of the components and it can be some text ot any 
    // other valid JSX structure
    
    //having a function inside a function allows us to use the props in the inside function

    return (
        <li> {/* list item */}
            <button className={isSelected ? "active" : ""} onClick={onSelect} >
                {label}
            </button>
        </li>
    );
}

export default TabButton;