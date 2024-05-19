import './TopNav.css';

const TopNav = ()=>{

    return(
        <div className='header bg-dark'>
        <div className='row'>
          <div className='brand my-1'>
            <h1>eStore</h1>
          </div>
          <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
            <div className='dropdown m-0 p-0'>
              <select name="" id="" className='select-btn w-100 p-0 m-0'>
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>

              </select>
            </div>
            <input className='form-control' placeholder='search'/>
            <button><i className='fa fa-search' /></button>
          </div>
          <div className='login-container'>
            <i className='fa fa-user-circle' />
             <a href=""><h5>Login</h5></a> / <a href=""><h5>Register</h5></a>
          </div>
          <div className='cart-wishlist'>
            <ul>
              <li className='list-icon'> <i className='fa fa-heart'></i></li>
              <li className='list-icon'><i className='fa fa-shopping-cart'></i></li>
            </ul>
          </div>
        </div>
      </div>
    )
};

export default TopNav;