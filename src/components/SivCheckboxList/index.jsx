import './index.scss'
import { useState } from 'react'
import SivCheckbox from '../SivCheckbox/index.jsx';
import { useCallback, useMemo } from 'react';

function SivCheckList({
  data,
  headerCells,
  allCheckedTip,
  onCheckedDataChange
}) {
  // 选出来的数组
  const [checkedData, setCheckedData] = useState([]);
  // 定义传入的原始数据
  const [originData, setOriginData] = useState(data);
  // 获取数组对象中的属性集合，避免写死
  const dataProps = Object.keys(originData[0]);

  /**
   * 功能：点击全选
   */
  const setAllCheck = useCallback((e) => {
    console.log(e);
  })

  /**
   * 功能：计算到底应该显示allCheckedTip的none还是all
   * useMemo很多情况可以当做vue中的计算熟悉来用，它里面有个逻辑导致重新计算
   * useMemo依赖改变需要重新计算
   */
  const allCheckedText = useMemo(() => {
    // checkedData选择的数组大于等于0， 并且小于传入的数组时
    if (checkedData.length >= 0 && checkedData.length < originData.length) {
      return allCheckedTip.all || 'Check all';
    } else {
      return allCheckedTip.none || 'Cancel all'
    }
  }, [checkedData])

  return (
    <div>
      <table border="1" width="500" align="center">
        <thead>
          <tr>
            <td colSpan={5}>
              <SivCheckbox
                checked={checkedData.length === originData.length}
                onChange={(e) => setAllCheck(e)}
              >
                {allCheckedText}
              </SivCheckbox>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default SivCheckList; 