import SivCheckList from "./components/SivCheckboxList/index.jsx";
import studentData from "./mock/student.js";
import { useCallback } from 'react'

function App() {
  // 缓存函数，useCallback返回一个记忆回调函数
  const getCheckedData = useCallback((data) => {
    console.log(data);
  })

  return (
    <div>
      <SivCheckList
        data={studentData}
        headerCells={
          [
            '选择',
            'ID',
            '姓名',
            '分数',
            '删除'
          ]
        }
        allCheckedTip={
          {
            all: '全部选择',
            none: '全部撤销'
          }
        }
        onCheckedDataChange={getCheckedData}
      ></SivCheckList>
    </div>
  );
}

export default App;
