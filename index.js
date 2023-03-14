function App(){
    {/*Two state variables are declared. The first one, to hold the input value. The second one, to hold the answer value*/}
    const [expression, setExpression] = React.useState('');
    const [answer, setAnswer] = React.useState(0)

    {/*The display function takes in the value of the clicked button to add it to the expression value through the setExpression function.
    It is ckecked if it's last character is an equal sign. If this is true, it is tested using a regex expression whether the penultimate
    character of the new expression value is either a number or a '.' (to display it on screen without the answer value ), or  an operation
    symbol (to concatenate it with the answer)*/}
    const display = (char) => {
        setExpression((prev) => prev + char);
        if(expression[expression.length - 1] == '='){
            if(/[0-9.]/.test(char)){
                setExpression(char);
            }else{
                setExpression(answer + char);
            }
        }
    };
    {/*This function takes in the expression input, applies the eval JS function on it (which makes the calculations) and returns a value. Then, concatenation is used to update setExpression*/}
    const calculate = () => {
        setAnswer(eval(expression));
        setExpression(prev => prev + '=');

    };
    {/*Reset state function for the clear button*/}
    const clear = () =>{
        setExpression('');
        setAnswer(0);
    };

    return (
    <div className='container'>
        <div className='grid'>
            <div id='display'>
                {/*The input has to be disabled in order to simulate a calculator*/}
                <input type='text' value={expression} placeholder='0' disabled />
                <div className='total'>{answer}</div>
            </div>
            {/*Each button is attached to an event listener onClick to trigger it's function*/}
            <div onClick={clear} className='button' id='clear'>AC</div>
            <div onClick={() => display('/')} className='button' id='divide'>/</div>
            <div onClick={() => display('*')} className='button' id='multiply'>x</div>
            <div onClick={() => display('7')} className='button' id='seven'>7</div>
            <div onClick={() => display('8')} className='button' id='eight'>8</div>
            <div onClick={() => display('9')} className='button' id='nine'>9</div>
            <div onClick={() => display('-')} className='button' id='subtract'>-</div>
            <div onClick={() => display('4')} className='button' id='four'>4</div>
            <div onClick={() => display('5')} className='button' id='five'>5</div>
            <div onClick={() => display('6')} className='button' id='six'>6</div>
            <div onClick={() => display('+')} className='button' id='add'>+</div>
            <div onClick={() => display('1')} className='button' id='one'>1</div>
            <div onClick={() => display('2')} className='button' id='two'>2</div>
            <div onClick={() => display('3')} className='button' id='three'>3</div>
            <div onClick={calculate} className='button' id='equals'>=</div>
            <div onClick={() => display('0')} className='button' id='zero'>0</div>
            <div onClick={() => display('.')} className='button'  id='decimal'>.</div>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);