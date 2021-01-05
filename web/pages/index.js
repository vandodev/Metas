function Home() {
    return <div>Welcome to Next.js!</div>
};

export async function getServerSideProps() {
 const response = await fetch('http://localhost:8080/metas');
 const data = await response.json();
  console.log(data);
  return {props: { data }};
};
  
export default Home;