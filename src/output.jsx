import Bubblesort from './bubblesort';

const Output = (wordEnt) => {
    return (
        <div className='result'>
            <h2>{Bubblesort(wordEnt)}</h2>
        </div>
    );
};

export default Output;