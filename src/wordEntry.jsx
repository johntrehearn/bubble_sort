

function Word({checkPal, wordEnt}) {
    return (
        <>
        <input id="word" type='text' placeholder='Please enter your word, number or phrase' value={wordEnt}
        onChange={checkPal}/>
        {/* <button onClick={checkPal}>Check Palindrome</button> */}
        </>
    )
}

export default Word;