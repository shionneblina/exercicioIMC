import {useState} from "react"

const Formulario = () => {
    let [peso, setpeso] = useState(0);
    let [altura, setaltura] = useState(0);
    
const renderizaResultado = () => {
    const alturaMetros = altura / 100;
    const calculo = (peso / (alturaMetros * alturaMetros)).toFixed(2);


    if (calculo < 18.5) {
        return <p>{calculo} = Magreza</p>;
    } 
    else if (calculo >= 18.5 && calculo < 25) {
        return <p>{calculo} = Normal</p>;
    } 
    else if (calculo >= 25 && calculo < 30) {
        return <p>{calculo} = Sobrepeso</p>;
    } 
    else if (calculo >= 30) {
        return <p>{calculo} = Obesidade</p>;
    };


    }
    return (
        <form> 
            <input type="number" placeholder="peso(kg)" onChange={evento => setpeso(parseInt(evento.target.value))} />
            <input type="number" placeholder="altura(cm)" onChange={evento => setaltura(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario