import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  rounded = false,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick = null,
  ...passProps
}) {
  let Comp = 'button'
  const _props = {
    onClick,
    ...passProps,
  }

  if (disable) {
    delete _props.onClick

    // remove multi props event

    // Object.keys(_props).forEach((key) => {
    //   if (key.startsWith('on') && typeof _props[key] === 'function') {
    //     delete _props[key]
    //   }
    // })
  }

  if (to) {
    _props.to = to
    Comp = Link
  } else if (href) {
    _props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    [className]: className,
  })

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button
