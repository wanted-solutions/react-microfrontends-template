import React from "react";
const Container = React.lazy(() => import('MicroFrontend/Container'));

export default function App() {
    return (
        <>
            <div>Main App</div>
            <Container />
        </>
    )
}