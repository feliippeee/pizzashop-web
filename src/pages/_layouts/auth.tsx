import { Outlet } from 'react-router-dom'
export function Authlayout() {
    return (
        <div>
            <h1 className='flex flex-'>Autenticação</h1>

            <div>
                <Outlet />
            </div>
        </div>
    )
}