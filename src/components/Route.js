import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLacationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLacationChange);

        return () => {
            window.removeEventListener('popstate', onLacationChange);
        }
    }, []);
    return currentPath === path
        ? children
        : null;
}

export default Route;
