import { Link } from "react-router-dom"

function NavBar(props){
    return (
        <>
        <ul className="flex py-3">
            <li className={`${props.margin} ${props.transform} ${props.size}`}> <Link to="/" className="hover:text-cyan-400 focus-visible:text-cyan-400">home</Link> </li>
            <li className={`${props.margin} ${props.transform} ${props.size}`}><Link to="/about" className="hover:text-cyan-400 focus-visible:text-cyan-400">about</Link></li>
            <li className={`${props.margin} ${props.transform} ${props.size}`}><Link to="#" className="hover:text-cyan-400 focus-visible:text-cyan-400" >contact</Link></li>
        </ul>

        <button className="text-white" onClick={props.setmode}>Enable Darkmode</button>
        </>
    )
}

function LogoNav(imgsrc){
    return (
        <div className="flex justify-around bg-black p-3">
            <img src={imgsrc.imgsrc} alt="logo" className="w-8" />
            <form method="get" className="bg-white px-1 p-1">            
                <input type="text" name="query" placeholder="Search" className="outline-none" />
                <button type="submit" >
                    Q
                </button>
            </form>
        </div>
    )
}

export function Container(props){
    return (
        <div >
            <LogoNav 
            imgsrc={props.src}
            />  
            <div className="flex justify-center bg-purple-950 dark:bg-black text-white ">         
                <NavBar
                margin='mx-10'
                transform="capitalize"
                size="text-lg"
                setmode = {props.setMode}
                />
            </div>
        </div>
    )
}