import React , {useState} from 'react';

function Cadastrar(){

    const [meta, setMeta] = useState({
        name: '',
        description: '',
        status: ''
    });

    const onChangeInput = e => setMeta({...meta, [e.target.name]: e.target.value })

    const [response, setResponse] = useState({
        formSave: false,
        type:'',
        message:''        
    });

    const sendMeta = async e =>{
        e.preventDefault();

        setResponse({formSave:true})

        try{
            const res = await fetch('http://localhost:8080/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers:{'Content-Type': 'application/JSON'}
            });

            const responseEnv = await res.json();
            if(responseEnv){
                setResponse({
                    formSave: false,
                    type:'error',
                    message:responseEnv.message  
                });
            }else{
                setResponse({
                    formSave: false,
                    type:'success',
                    message:responseEnv.message  
                });
            }

        }catch(error){
            setResponse({
                formSave: false,
                type:'error',
                message:'Erro: Meta não cadastrada, tente mais tarde'  
            });           
        }    

    };

    return (
        <>
            <h1>Cadastrar Meta</h1>
            <hr/>

            {response.type === 'error' ? <p>{response.message}</p>: ""}
            {response.type === 'success' ? <p>{response.message}</p>: ""}

            <form onSubmit={sendMeta}>
                <label>Nome: </label>
                <input type="text" name="name" id="name" placeholder="Nome da meta" onChange={onChangeInput} /> <br /><br />

                <label>Descrição: </label>
                <input type="text" name="description" id="description" placeholder="Descrição da meta" onChange={onChangeInput} /> <br /><br />

                <label>Status: </label>
                <input type="text" name="status" id="status" placeholder="Status da meta" onChange={onChangeInput} /> <br /><br />

                {
                    response.formSave ? <button type="submit" disabled>Enviando ...</button> :
                    <button type="submit">Cadastrar</button>
                }

            </form>

        </>
    ); 
}

export default Cadastrar;