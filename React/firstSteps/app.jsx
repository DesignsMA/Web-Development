function header() {
    return (<h1>My First React App</h1>);
}

const app = document.getElementById('app');

const root = ReactDOM.createRoot(app);

root.render(header());

