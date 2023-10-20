const GamePage = ({ params }) => {
    return (
        <div>
            <h1>Game Page</h1>
            <p>Game ID: {params.game}</p>
        </div>
    );
}

export default GamePage;
