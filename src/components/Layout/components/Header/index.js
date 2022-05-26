import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css' // optional
import { useEffect, useState } from 'react'
import { PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

const cx = classNames.bind(styles)

function Header() {
  const [searchResult, setSearchResult] = useState([])
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt='' />
        </div>
        <Tippy
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>

                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
          visible={visible}
          onClickOutside={hide}
          interactive
        >
          <div className={cx('search')}>
            <input
              onClick={visible ? hide : show}
              className={cx('search-input')}
              type='text'
              placeholder='Search account and videos'
              spellCheck={false}
            />

            <button className={cx('clear')}>
              {/* clear */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              {/* search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}></div>
      </div>
    </header>
  )
}

export default Header
