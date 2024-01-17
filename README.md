##깃허브에 처음 데이터를 올리는 명령어
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/soobini11/himedia.git
git push -u origin main

##리액트 시작하기
컨트롤 제이 눌러서 터미널 시작하기
npm i 누르면 모듈을 설치해줌

 const [show,setShow]=useState(false);
 //useState : 함수형 컴포넌트에서도 상태(state)를 관리 할 수 있게 해주는 Hook
 // 형식 : const [변수명, 상태를 업데이트 할 변수명] = useState(초기값) / 이때 false라 주면 없는 것

 //useEffect : 컴포넌트가 렌더링 될 때마다 어떠한 작업을 수행하도록 해야 한다면, 그것을 설정하는 Hook으로 사용 => 불러올 때마다 실행시키는 것

 <!-- const Footer = () => {
 <!-- const [count,setCount] = useState(0)
 return(
  // <div>
  //   <p>you clicked {count} times</p>
  //   <button onClick={()=>(setCount(count+1))}>click me+</button>
  //   <button onClick={()=>(setCount(count-1))}>click me-</button>
  // </div>
 )
}

export default Footer --> -->