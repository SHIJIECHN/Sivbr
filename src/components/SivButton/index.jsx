import './index.scss'

// 按钮类型
const btnType = [
  'primary',
  'success',
  'warn',
  'danger'
]

/**
 * 按钮
 * @param {string} type 按钮类型btnType中的其中一项 
 * @param {*} children 子元素 
 * @param {*} resProps 传入的剩余参数。
 *     包括传进来的onClick属性，所以点击button会有反应
 * @returns 
 */
function SivButton({
  type,
  children,
  ...resProps
}) {

  // 通过函数计算样式属性
  // btn btn-primary的形式返回。默认是btn-primary
  const createStyleClass = () => {
    let _type = btnType.includes(type);
    _type = _type ? `btn-${type}` : 'btn-primary';

    return ['btn', _type].join(' ');
  }

  return (
    <div>
      <button
        {...resProps}
        className={createStyleClass()}
      >{children}</button>
    </div>
  )
}

export default SivButton; 