function App(){

    const [expression, setExpression] = React.useState('');
    const [answer, setAnswer] = React.useState(0)

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if(expression[expression.length - 1] == '='){
            if(/[0-9.]/.test(symbol)){
                setExpression(symbol);
            }else{
                setExpression(answer + symbol);
            }
        }
    };

    const calculate = () => {
        setAnswer(eval(expression));
        setExpression(prev => prev + '=');

    };

    const clear = () =>{
        setExpression('');
        setAnswer(0);
    };

    return (
    <div className='container'>
        <div className='grid'>
            <div id='display'>
                <input type='text' value={expression} placeholder='0' disabled />
                <div className='total'>{answer}</div>
            </div>
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

ReactDOM.render(<App/>, document.getElementById('root'));