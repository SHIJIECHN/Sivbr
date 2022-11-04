import './index.scss'

/**
 * 多选框
 * @param {*} children 子元素 
 * @param {Function} onChange 多选框回调选中与取消  
 * @param {Boolean} checked  控制多选框选中状态
 * @returns 
 */
function SivCheckbox({
  children,
  onChange,
  checked
}) {

  /**
   * 功能：控制子元素显示。
   * children没有就不显示，返回空字符串。
   * children存在则使用span包裹后返回
   * @returns 需要渲染的子元素
   */

  const createText = () => {
    if (typeof children !== 'string') {
      return ''
    };
    return <span>{children}</span>
  }
  return (
    <div>
      <input
        type="checkbox"
        className='my-checkbox'
        checked={checked}
        // 需要将事件对象传出去
        onChange={(e) => onChange(e)}
      />
      {createText()}
    </div>
  )
}

export default SivCheckbox; 