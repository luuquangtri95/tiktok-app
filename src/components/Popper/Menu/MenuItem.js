import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ item, onClick }) {
  return (
    <Button className={cx('menu-item')} leftIcon={item.icon} to={item.to} onClick={onClick}>
      {item.title}
    </Button>
  )
}

export default MenuItem
