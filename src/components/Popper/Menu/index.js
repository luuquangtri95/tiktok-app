import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { PopperWrapper } from '..'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            {items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
