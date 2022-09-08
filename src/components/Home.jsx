import Card from './Card';

const Home = () => {
    
  return (
    <div className="flex flex-wrap justify-center items-center mt-10">
        <Card title="Road & Water" eth="0.5"
        img='https://images.unsplash.com/photo-1662505475505-cc7396a70a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' />
        <Card title="Porsche" eth="0.3" 
        img={"https://images.unsplash.com/photo-1662569258854-7fae360ac63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}/>
        <Card title="Iceland" eth="0.6"
        img={"https://images.unsplash.com/photo-1662622249257-4ffe08123e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}/>
        
    </div>

  );
}
export default Home