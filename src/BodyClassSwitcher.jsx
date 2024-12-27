import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function BodyClassSwitcher() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      document.body.className = '';
      switch (pathname) {
        case "/":
          document.body.classList.add('body_home');
          break;
        case "/about":
          document.body.classList.add('body_about');
          break;
        case "/404":
          document.body.classList.add('body_error404');
          break;
        default:
          document.body.classList.add('body_other');
          break;
      }
    }, [pathname]);
  
    return null;
}

export default BodyClassSwitcher;