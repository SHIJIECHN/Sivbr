import './index.scss'
import { useState } from 'react'
import SivCheckbox from '../SivCheckbox/index.jsx';
import SivButton from '../SivButton/index.jsx'
import { useCallback, useMemo, useEffect } from 'react';

/**
 * 列表多选框
 * @param {Array} data 列表数据数组
 * @param {Array} headerCells 列表头部
 * @param {Object} allCheckedTip 头部多选框文字展示
 * @param {Function} onCheckedDataChange 选中或取消选中数据项时，
 *        返回被选中的数组项
 * @returns 
 */
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
  }, [checkedData]);


  /**
   * 当checkedData有改变的时候执行onCheckedDataChange
   */
  useEffect(() => {
    onCheckedDataChange(checkedData);
  }, [checkedData])

  /**
   * 功能：点击全选。
   * 点击全选如果e.target.checked为true，那么originData就全部放进
   * checkedData里；如果假说明反选，也就是撤销掉了，就把checkedData清空
   */
  const setAllCheck = useCallback((e) => {
    const _checked = e.target.checked;
    setCheckedData(_checked ? originData : [])
  })

  /**
   * 功能：点击每一项的多选框。
   * 如果e.target.checked为true，则往checkedData放入item，如果是假
   * 则把当前项从checkedData里删除掉
   */
  const setSingleCheck = useCallback((e, item) => {
    const _checked = e.target.checked;
    setCheckedData(checkedData => _checked ?
      [...checkedData, item] : // 合并item和checkedData
      checkedData.filter(data => data.id !== item.id)

    )
  })

  /**
   * 功能：删除项。
   * 同时从originData和checkedData中删除
   */
  const removeItem = useCallback((id) => {
    setOriginData(originData => originData.filter(data => data.id !== id));
    setCheckedData(checkedData => checkedData.filter(data => data.id !== id))
  })

  return (
    <div>
      <table border="1" width="500" align="center">
        <thead>
          <tr>
            <td colSpan={5} align="left">
              <SivCheckbox
                checked={checkedData.length === originData.length}
                onChange={(e) => setAllCheck(e)}
              >
                {allCheckedText}
              </SivCheckbox>
            </td>
          </tr>
          {
            headerCells && (
              <tr>
                {
                  headerCells.map(item => (
                    <th key={item}>{item}</th>
                  ))
                }
              </tr>
            )
          }
        </thead>
        <tbody>
          {/* 渲染data  */}
          {
            originData.length !== 0 && originData.map(item => (
              <tr key={item.id}>
                <td>
                  <SivCheckbox
                    checked={
                      checkedData.some(data => data.id === item.id)
                    }
                    onChange={(e) => setSingleCheck(e, item)}
                  ></SivCheckbox>
                </td>
                {
                  dataProps.map(prop => (
                    <td key={prop}>{item[prop]}</td>
                  ))
                }
                <td>
                  <SivButton
                    type="warn"
                    onClick={() => removeItem(item.id)}
                  >删除</SivButton>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default SivCheckList; 