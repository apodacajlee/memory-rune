// This component will show the prompt and allow input from the user (yes or no)
export default function Prompt({ handleClick }) {

    return(
        <div>
            <p>Have you seen this rune yet?</p>
            <button onClick={() => handleClick(true)}>Yes</button>
            <button onClick={() => handleClick(false)}>No</button>
        </div>
    );
}