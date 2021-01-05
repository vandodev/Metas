function Cadastrar(){
    return (
        <>
            <h1>Cadastrar Meta</h1>
            <hr/>

            <form>
                <label>Nome: </label>
                <input type="text" name="name" id="name" placeholder="Nome da meta" /> <br /><br />

                <label>Descrição: </label>
                <input type="text" name="description" id="description" placeholder="Descrição da meta" /> <br /><br />

                <label>Status: </label>
                <input type="text" name="status" id="status" placeholder="Status da meta" /> <br /><br />

                <button type="submit">Cadastrar</button>

            </form>

        </>
    ); 
}

export default Cadastrar;