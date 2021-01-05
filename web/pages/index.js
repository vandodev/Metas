import React from 'react';

function Home({data}) {
    return (
      <>
      
        <h1>Minhas metas</h1> <hr />
        {data.metas.map(meta => (
            <div key={meta._id}>
              <h2>{meta.name}</h2>
              <p>{meta.description}</p>
              <p>{meta.status}</p>
              <hr />
            </div>
        ))}
        
      </>
    );
};

export async function getServerSideProps() {
 const response = await fetch('http://localhost:8080/metas');
 const data = await response.json();
  //console.log(data);
  return {props: { data }};
};
  
export default Home;