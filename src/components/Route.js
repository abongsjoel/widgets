import { useEffect } from 'react';

const Route = ({ path, children }) => {
    useEffect(() => {
        const onLacationChange = () => {
            console.log('Location Change');
        };

        window.addEventListener('popstate', onLacationChange);

        return () => {
            window.removeEventListener('popstate', onLacationChange);
        }
    }, []);
    return window.location.pathname === path
        ? children
        : null;
}

export default Route;
