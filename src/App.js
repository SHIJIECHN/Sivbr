import SivCheckList from "./components/SivCheckboxList/index.jsx";
import SivButton from './components/SivButton'
import SivCheckbox from './components/SivCheckbox'
import studentData from "./mock/student.js";
import { useCallback, useState } from 'react'

function App() {
  /**
   * 功能：按钮点击回调响应
   */
  const btnClcik = () => {
    console.log('btn click')
  }

  /**
   * 功能：多选框回调响应
   */
  const [checked, setChecked] = useState(false);
  const checkboxChange = (e) => {
    setChecked(e.target.checked);
    console.log('checked')
  }

  // 缓存函数，useCallback返回一个记忆回调函数
  /**
   * 功能：获取选中的数组项
   */
  const getCheckedData = useCallback((data) => {
    console.log(data);
  })

  return (
    <div>
      <SivButton
        type="warn"
        onClick={btnClcik}
      >
        Click
      </SivButton>
      <hr />
      <SivCheckbox
        checked={checked}
        onChange={checkboxChange}
      >
        This is checkbox
      </SivCheckbox>
      <hr />
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
