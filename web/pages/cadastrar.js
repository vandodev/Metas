import React , {useState} from 'react';

function Cadastrar(){

    const [meta, setMeta] = useState({
        name: '',
        description: '',
        status: ''
    });

    const onChangeInput = e => setMeta({...meta, [e.target.name]: e.target.value })

    const sendMeta = async e =>{
        e.preventDefault();
        console.log(meta);

        try{
            const res = await fetch('http://localhost:8080/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers:{'Content-Type': 'application/JSON'}
            });

            const responseEnv = await res.json();
            if(responseEnv){
                console.log(responseEnv.message);
            }else{
                console.log(responseEnv.message);
            }

        }catch(error){
            console.log('Erro: Meta não cadastrada, tente mais tarde')
        }    

    };

    return (
        <>
            <h1>Cadastrar Meta</h1>
            <hr/>

            <form onSubmit={sendMeta}>
                <label>Nome: </label>
                <input type="text" name="name" id="name" placeholder="Nome da meta" onChange={onChangeInput} /> <br /><br />

                <label>Descrição: </label>
                <input type="text" name="description" id="description" placeholder="Descrição da meta" onChange={onChangeInput} /> <br /><br />

                <label>Status: </label>
                <input type="text" name="status" id="status" placeholder="Status da meta" onChange={onChangeInput} /> <br /><br />

                <button type="submit">Cadastrar</button>

            </form>

        </>
    ); 
}

export default Cadastrar;