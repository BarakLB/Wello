import { Routes, Route } from 'react-router';
import routes from './routes.js';
import { AppHeader } from './cmps/AppHeader.jsx';

export function Root() {
    return (
        <section>
            <AppHeader />
            <main>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
            </main>
        </section>
    );
}