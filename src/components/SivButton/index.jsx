import './index.scss'

const btnType = [
  'primary',
  'success',
  'warn',
  'danger'
]

/**
 * resProps剩余传入的属性。包括传进来的onClick属性，所以点击button会有反应
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