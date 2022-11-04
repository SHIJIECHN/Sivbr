import './index.scss'

function SivCheckbox({
  children,
  onChange,
  checked
}) {


  // children没有就不显示，返回空字符串。
  // children存在则使用span包裹后返回
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