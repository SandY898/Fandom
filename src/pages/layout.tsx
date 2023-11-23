// layout.js
import {ReactNode} from "react"
import Main from "./main";

interface Props {
   children: ReactNode
}


export default function RootLayout({

                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
