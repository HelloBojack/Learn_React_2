import React, { useState } from 'react'
import './login.css'
function Login() {
  const [loginClassName, setLoginClassName] = useState('');
  const [loginDivClassName, setLoginDivClassName] = useState('');
  const [successClassName, setSuccessClassNameClassName] = useState('');
  const [svgClassName, setClassNameClassName] = useState('');
  const [authentClassName, setAuthentClassName] = useState('authent');

  const handleSubmit = () => {
    setLoginClassName('test')
    setTimeout(function () {
      setLoginClassName('test testtwo')
    }, 300);

    // loading
    setTimeout(function () {
      setAuthentClassName('authent show')
    }, 500);

    // setTimeout(function () {
    //   setAuthentClassName('authent')
    //   setLoginClassName('test')
    // }, 2500);

    // setTimeout(function () {
    //   setLoginClassName('')
    //   setLoginDivClassName('hide')
    // }, 2800);
    // setTimeout(function () {
    //   setSuccessClassNameClassName('show')
    //   setClassNameClassName('show')

    // }, 3200);

  }

  // $('input[type="submit"]').click(function () {

  // $('input[type="text"],input[type="password"]').focus(function () {
  //   $(this).prev().animate({ 'opacity': '1' }, 200)
  // });
  // $('input[type="text"],input[type="password"]').blur(function () {
  //   $(this).prev().animate({ 'opacity': '.5' }, 200)
  // });

  // $('input[type="text"],input[type="password"]').keyup(function () {
  //   if (!$(this).val() == '') {
  //     $(this).next().animate({ 'opacity': '1', 'right': '30' }, 200)
  //   } else {
  //     $(this).next().animate({ 'opacity': '0', 'right': '20' }, 200)
  //   }
  // });

  // var open = 0;
  // $('.tab').click(function () {
  //   $(this).fadeOut(200, function () {
  //     $(this).parent().animate({ 'left': '0' })
  //   });
  // });


  return <>
    {/* <div className='brand'> */}
    {/* <a href='https://www.jamiecoulter.co.uk' target='_blank'> */}
    {/* <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png' /> */}
    {/* </a> */}
    {/* </div> */}
    <div className={["login", loginClassName].join(' ')}>
      <div className={["login_title", loginDivClassName].join(' ')} >
        <span>Login to your account</span>
      </div>
      <div className={["login_fields", loginDivClassName].join(' ')} >
        <div className='login_fields__user'>
          <div className='icon'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png' alt='user' />
          </div>
          <input placeholder='Username' type='text' />
          <div className='validation'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png' alt='password' />
          </div>
          {/* </input> */}
        </div>
        <div className='login_fields__password'>
          <div className='icon'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png' alt='password' />
          </div>
          <input placeholder='Password' type='password' />
          <div className='validation'>
            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png' alt='password' />
          </div>
        </div>
        <div className='login_fields__submit'>
          <input type='submit' value='Log In' onClick={() => { handleSubmit() }} />
          <div className='forgot'>
            <a href='#1'>Forgotten password?</a>
          </div>
        </div>
      </div>
      <div className={["success", successClassName].join(' ')} >
        <h2>Authentication Success</h2>
        <p>Welcome back</p>

        <svg width="200" height="200">
          <circle className={["circle", svgClassName].join(' ')} fill="none" stroke="#DC6180" strokeWidth="15" cx="100" cy="100" r="90" strokeLinecap="round" transform="rotate(-90 100 100) " />
          <polyline className={["tick", svgClassName].join(' ')} fill="none" stroke="#DC6180" strokeWidth="18" points="50,90 90,140 150,70" strokeLinecap="round" strokeinejoin="round" />
        </svg>

      </div>
      <div className={["disclaimer", loginDivClassName].join(' ')}  >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper laoreet placerat. Nullam semper auctor justo, rutrum posuere odio vulputate nec.</p>
      </div>
    </div>
    <div className={authentClassName}>
      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg' alt='authent' />
      <p>Authenticating...</p>
    </div>
    {/* <div className='love'> */}
    {/* <p>Made with <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/love_copy.png" /> by <a href='https://www.jamiecoulter.co.uk' target='_blank'> Jcoulterdesign </a></p> */}
    {/* </div> */}
  </>
}

export default Login
