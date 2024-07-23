
export function Alert(props){
    return (
    
        props.alert && <div className="flex justify-between bg-green-500 dark:text-white">
            <p>{props.alert.message} is enabled</p>
        </div>
        
    )
}