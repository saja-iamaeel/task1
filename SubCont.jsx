import "./Style.css"
import Post from './Post';
import MyButton from './MyButton';
export default function SubCont(){
    return(
        <div className="subcont">
        <Post/>
        <MyButton/>
        </div>
  
    );
}