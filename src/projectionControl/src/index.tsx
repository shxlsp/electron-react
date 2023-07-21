import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  console.log(11111, '???合理');
  // eslint-disable-next-line no-param-reassign
  return <div onClick={() => setCount((n: number) => n + 1)}>非常合泰裤辣理1111{count}...</div>;
};
export default App;
