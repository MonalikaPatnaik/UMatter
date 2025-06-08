import { useState } from 'react'
import captchaBg from "../../images/captcha_Bg.webp"
import { FiRefreshCcw } from "react-icons/fi"
import {
  CaptchaContainer,
  CaptchaInputGroup,
  CaptchaDisplay,
  RefreshButton,
  CaptchaInput,
  VerifyButton,
} from './SignupElements'

const Captcha = ({ message, trackState }) => {
  const [user, setUser] = useState({
    username: ""
  });

  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  const [captcha, setCaptcha] = useState(generateString(6))
  const [isVerifying, setIsVerifying] = useState(false);
  
  let handleCaptcha = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  }
  
  const onSubmit = () => {
    setIsVerifying(true);
    
    setTimeout(() => {
      if (captcha === user.username) {
        message(true);
        setIsVerifying(false);
      } else {
        setIsVerifying(false);
        setCaptcha(generateString(6));
        setUser({ username: "" });
        document.getElementById("inputType").value = "";
      }
    }, 1000);
  };

  const onRegenerate = () => {
    setCaptcha(generateString(6));
    setUser({ username: "" });
    document.getElementById("inputType").value = "";
  }
  
  return (
    <CaptchaContainer>
      <CaptchaInputGroup>
        <CaptchaDisplay
          type="text"
          id="captcha"
          value={captcha}
          readOnly
          style={{ backgroundImage: `url(${captchaBg})` }}
        />
        <RefreshButton 
          type="button" 
          onClick={onRegenerate} 
          disabled={trackState}
          aria-label="Regenerate Captcha"
        >
          <FiRefreshCcw size="1.2em" />
        </RefreshButton>
        <CaptchaInput
          type="text"
          placeholder="Enter Captcha"
          name="username"
          id="inputType"
          onChange={handleCaptcha}
          autoComplete="off"
          disabled={trackState}
        />
      </CaptchaInputGroup>
      
      <VerifyButton 
        type="button" 
        onClick={onSubmit}
        disabled={trackState || isVerifying}
      >
        {isVerifying ? 'Verifying...' : trackState ? 'Verified ✓' : 'Verify Captcha'}
      </VerifyButton>
    </CaptchaContainer>
  )
}

export default Captcha