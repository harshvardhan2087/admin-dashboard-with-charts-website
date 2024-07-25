import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='logo_image'/>
        <span>DASHBOARD</span>

      </div>
      <div className="icons">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="icon" />
        <img src="expand.svg" alt="icon" />
        <div className="notification">
        <img src='notifications.svg' alt='icon'/>
        <span>1</span>
        </div> 
        <div className="user">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sidharth_Malhotra_snapped_during_Indian_Police_Force_promotion.jpg/220px-Sidharth_Malhotra_snapped_during_Indian_Police_Force_promotion.jpg' alt='icon'/>
          <span>James</span>
        </div>
        <img src="setting.svg" alt="icon" />

      </div>
    </div>
  )
}

export default Navbar