import React, { useState, useEffect } from 'react';

import '../nav.css';


const Nav = () => {
  
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener('scroll');
      }
    })
  }, []);

  return (
    <div className={`nav ${show && "nave__black "}`}>
      <img
        className="nav__logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEUAAADlCRTsCRVqBAnoCRQ0AwVEAwbxCRWxBw/BBxGCBQsqAQTOCBLICBFbAwjWCBPdCRNiAwkcAQOlBw97BQtRBAjYCRPgCRQVAQJVBAiQBg2GBgzDCBE7AwZwBQqgBg6VBg0kAQMsAQT4Cha5CBAMAQJ1BQtJAwcxAgU5AgUbAgOtCBBYBAjQGB9fBAhmBQm6B7WgAAAG4UlEQVR4nO2ca3uqOBRGIUXRqtXWW8V7q/ZiR///vxu5ZSckMEDoOROfd32Z56SZTVyGkOwEHQcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgEV4fUj6k8isvf+FlPw/5/MRVPgqqhBzji27ya2y+4kjPvOAtt/FrHmeaFn1R6KlUd09/uNaV1WIpM6ncTYt9kjhg+XTjKme/oM6N76jW23t+jffHONKINyD/sy351Q5cFjVA/kBb/gf/oAQqK8tNYVLXGqXFXpuXdT03Dy9pwDi/SlTtNarV8/Or+JM40jCNxJ5zG//I0rgdaiRFuoh16QqsrQSqLMsb34WsC4/tiT1oQpcc1HUlyHKlbmutLKEL+UcqnVFp7SFLlMXEbmuvrG1a6LIlL/yhK45quxJliVe0WFaLyxLuFWq6YNBElusJ3dZeWc6KxCySorbQrBddpOqy/M1dyDrxrsWLqVnyY8xAlrsqLcvLksyzxoyXuLrKiiwlkLms45wuvY9KXqig/rwhK8v/LifLGw6yJF9YQCXko0+FiiwlUP/BVJbQj1g8w11SX1tpA9WRxYJystikROQ+rz3N/olk5T+aDGR9kJt4TiXMG/KDlUCS5fV5eZOynrJ/+mVZTp/krG//fGpk3uBkZAlLHqtlTahrhcMDjQh+mYbnk5G1TcutluXQVMu7zRvoX26Jdhcgy6JpnN2yOnyIv02HzjTeb/VxypKR5Sd5KctlTWk1PRDzDesS7S4gI4tf1W5ZzpA+0pkGsNqJrISMrPAej7BcViCMWtSxlIZUJCvLT+aElsv61C27hiVaXUhWVpoas1yWc1BtsVOJVheiyGLxcsp2WVdhvpBWKtHoYlRZcb7HdlmOsJpO4hjOGxyNrGTJY72sXbZrsV6JRhejyEqWPMWytk/XCedRv7FXSpY7GwmIWwmmsvaZnJmmSmU0sqLuWpzPYr7A+0IbuZws6fOIjytTWULCNA6jb2UlVFnxE7ZCptRXUjAR1WW5jcraSBcREir10cjyw+/AflnHkRjafN7gyLs76X/Pzj3IkvcD5mWFFEGy5v9wW85dyPoQnodCDtgAoWfxeVy45LkDWdSCW5CyPgoRzjr0UkFhVv8eZAkbYKb5hhhBFmXJvP09yBK3xAxTpAmCrOMlvfZtyVMsK9njS05UmcyzpD3DZmVNhDErTaaYIch64eup26SkeN9wNQ7ZBkGwXC53LW3kv7zckYYsk3NGApIsfpN7n9avDYWDWlGUrxJN/i8kWR9pfLbkeVlrZckjrGeec8jIoq3bER8cbZX1lnmImG2vxsiylLyGvbKy53lYA0O8LKt9P7Ky05wmplqyLPkJYrOspfK1N5r8i2QFyjUslSVsHKZxzJeHGVlfd9KzHtTxpIEhPiPLGSj3upWyVsqXnrssq0BWlnKvWylrTZ+C0RrNOAuflXW8C1nC+YYzjV6ewUHliKwsZ3UPsugb94/alwjqocjaZLeQ/rqsn9w6ebLome51xROmppsWiqzsbK6UrONencQ0Jcvrd87jIDhtFtPeXq6TJ4sSWeGgTnNH9ShwNVRZmSMVWlmP36320/Ux2HYOg/5ozvx3NQXSlKwo58WSnUrGRqN+N62TI+sk9yXKa7FzdUEiqqyrfB9qk39z14tazvi7AepiojlZGTz+P+XIoulPfAsIkSr7kVBlfctHKqq9jiLwa7Lo4Kte1pSG93n0NpJ0wtQEVZbTkWYP9smi9rNdVNCme8VsiNfIutgtqyeckEweOzTV8vUp8JJoZMlHm6yTRTk53ijh3R2jhKlOlpQ3s04W1fPTpveozGg1rZPVFp+HBrLSl+Iu2T/RTxXkP55mNWWddAMUDfFGCVOdLOk+LCmrq0Tuhu/ZHW6clVf86Ecw8l/uPgxns5Eb/ryEn85S0nlKoSzhJSd69D2zgoaWRytLTMXnyuIzRebOh/0mNk8Uvvf71td6sbieJsHufO52+8O56/v8JK1G1oKaLt5x9BKd91m/PVpZa+E+FGSt0k1ozx31B4fx9nFyabeOurC/yQt/ok3cpD2My6L1h5QZ3emLK6KVJfRlUda529kGk8v07Y/7yef1c/owCcbJb7LchltaVIjL1ZeGf6pAlHVbtt86UXiLzYeGLwf9Wdq78WEwnIdNl9fWlDr16x8u1ctqs9mqs5s8rfevtSP/RV577eel/CU/6H91pRqprFtHMs0j/r+Zs/Rpymp3gFZ4uzFv1D9s/0cj0S+wWI67/VH4Yf3aCdPPQSfYTD+tvNuq891anHadZo4BAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbxL1QYfZGw6G8rAAAAAElFTkSuQmCC"
        alt="Neflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWJGTfcKEsf8orptPluRjia6-mqRXzKQV2wA&usqp=CAU"
        alt="Neflix Logo"
      />
    </div>
  );
};

export default Nav;