import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>
   {/* <PostList></PostList> */}
 </div>
    <div>
      {/*<PostForm></PostForm>*/}
    {/*Eğer component children almıyorsa aşağıdaki gibi kullanım daha doğrudur.*/}
      <PostForm />
    </div>
    </>
);
}

export default App;
