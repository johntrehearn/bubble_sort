import Palindrome from './palindrome';

const Output = (wordEnt) => {
    return (
        <div className='result'>
            <h2>{Palindrome(wordEnt)}</h2>
        </div>
    );
};

export default Output;