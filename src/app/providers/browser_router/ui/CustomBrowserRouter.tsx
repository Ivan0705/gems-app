import {ReactNode} from "react";

interface CustomBrowserRouterProps {
    children: ReactNode
}

export const CustomBrowserRouter = (props: CustomBrowserRouterProps) => {
    const {children} = props;
    return(
        <BrowserRouter></BrowserRouter>
    )

}
