import { FC } from "react";

export const DarkLayout: FC<any> = ({children}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h2>Dark-Layout</h2>
            {children}
        </div>
    );
}