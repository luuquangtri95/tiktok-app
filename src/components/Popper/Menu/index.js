import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { PopperWrapper } from '..'
import Header from './Header'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
const cx = classNames.bind(styles)

function Menu({ items = [], children, onChange = null }) {
  const [history, setHistory] = useState([{ data: items }])
  const currentMenu = history[history.length - 1]

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title='Language'
                onBack={() => {
                  setHistory((prevState) => prevState.slice(0, prevState.length - 1))
                }}
              />
            )}
            {currentMenu.data.map((item, index) => {
              const isParent = !!item.children

              return (
                <MenuItem
                  key={index}
                  item={item}
                  onClick={() => {
                    if (isParent) {
                      setHistory((prevState) => [...prevState, item.children])
                    } else {
                      onChange(item)
                    }
                  }}
                />
              )
            })}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
