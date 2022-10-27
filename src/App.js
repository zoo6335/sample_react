
import './App.css';
import Comment from './1013jsx/Comment';
import Say from './1013jsx/Say';

const comment = {
  date: new Date(),
  text : "I hope you enjoy learning React...!",
  author : {
    name : "Hello Kitty",
    avatarUrl : 'http://placekitten.com/g/64/64'
  }
};

function App() {
  // const element = <WelcomeProp name="곰도리" />
  return (
    <div>
      {/* <WelcomeProp name = "천지훈" job="백수" color="blue" font="1.5em">&&&%</WelcomeProp>
      <WelcomeProp name = "누구지" job="백수" color="blue" font="1.5em">OK</WelcomeProp>
      <WelcomeProp name = "서민혁" job="백수" color="blue" font="1.5em"/>
      <WelcomeProp /> */}
      <Comment
        date={comment.date}
       text={comment.text}
       author={comment.author}
      />

      </div>
  )
}

export default App;
