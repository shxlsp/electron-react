import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      欢迎使用- electron-react
      <br />
      页面： projectionControl
      <div onClick={() => setCount((n: number) => n + 1)}>点击增加：{count}</div>
    </>
  );
};
export default App;
