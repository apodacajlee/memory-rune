// This component will track and display the score at the top of the screen
export default function ScoreBoard({ score, hiScore }) {
    return(
        <div>
            <p>Score: {score}</p>
            <p>Hi Score: {hiScore}</p>
        </div>
    );
}