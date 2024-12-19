import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

interface PropsSearch {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

const RootLayout: React.FC<PropsSearch> = (props) => {


    return (
        <>
        <Header search={props.search} setSearch={props.setSearch}/>

        <main className="main">
            <Outlet />
        </main>
        </>
     );
}
 
export default RootLayout;