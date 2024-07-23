import {useState} from 'react'
function InputForm(props) {

    return (
        <div >
            <label htmlFor={props.name}>{props.name}</label> <br/>
            <input type={props.type} id={props.name} placeholder={props.placeholder} name={props.name} className="mb-5 mt-1 border px-2 py-1 border-gray-800" />
        </div>
    )

}

function Button() {

    function submit(e){
            alert('Form submitted')
    }

    function clear(){

    }

    return (<div className="flex m-5">
            <button onClick={(e)=>{
                e.preventDefault();
                submit();
                }}
                className="m-5 border bg-pink-800 px-3 py-1 text-white rounded"
                >submit</button>
            <button type="clear" onClick={clear} className="m-5 border bg-pink-800 px-3 py-1 text-white rounded" >clear</button>
            </div>
    )
}


export function CompleteForm() {
    return (
        <div className="mt-10  w-2/5 m-auto h-2/4 bg-white dark:bg-black dark:text-white">
            <h1 className="text-center text-2xl mt-14 mb-5">From Fillup</h1>
            <div className="flex flex-col items-center " >
                <InputForm
                    name="Name"
                    type="text"
                    placeholder="Enter your Name"
                />
                <InputForm
                    name="Password"
                    type="password"
                    placeholder="Password"
                />
                <InputForm
                    name="Comment"
                    type="text"
                    placeholder="Comment your thought"
                />

                <Button/>

            </div>
        </div>
    )
}

export function Letterchange(){
    const [text,changeText] = useState("Enter text")

    function change(event){
        console.log(event.target.value);
        changeText(event.target.value)
    }

    function upper(){
        let newText = text.toUpperCase()
        changeText(newText)
    }

    function clear(){
        changeText('')
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text)
    }

    const handlespace=()=>{
        let newtext = text.split(/[ ]+/)
        console.log(newtext);
        changeText(newtext.join(" "))
    }

    return (
        <div className='m-auto flex flex-col bg-white p-5 dark:bg-black dark:text-white'>
            <h1 className='m-auto mb-3'>Change into uppercase</h1>
            <textarea cols="30" rows="10" value={text} onChange={change} className='m-auto  border-2 p-1 border-cyan-600 '></textarea>
            <button type="submit" onClick={upper} className='border-2 border-cyan-500 m-4 bg-cyan-500 text-white'>Click</button>
            <button type="submit" onClick={clear} className='border-2 border-cyan-500 m-4 bg-cyan-500 text-white'>clear</button>
            <button type="submit" onClick={handlecopy} className='border-2 border-cyan-500 m-4 bg-cyan-500 text-white'>copy</button>
            <button type="submit" onClick={handlespace} className='border-2 border-cyan-500 m-4 bg-cyan-500 text-white'>removeextra space</button>
            <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characterss</p>
            <h1>{text}</h1>
        </div>
    )
}