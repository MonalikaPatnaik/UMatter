import { useState } from 'react';
import captchaBg from '../../images/captcha_Bg.jpg';
import { FiRefreshCcw } from 'react-icons/fi';

const Captcha = ({ message, trackState }) => {
  const [user, setUser] = useState({
    username: ''
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
  const [captcha, setCaptcha] = useState(generateString(6));
  let handleCaptcha = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  const onSubmit = () => {
    var element = document.getElementById('succesBTN');
    var inputData = document.getElementById('inputType');
    element.style.cursor = 'wait';
    element.innerHTML = 'Checking...';
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha === user.username) {
        element.innerHTML = 'Captcha Verified';
        element.style.cursor = 'not-allowed';
        element.style.backgroundColor = '#01bf71';
        message(true);
      } else {
        element.style.backgroundColor = 'red';
        element.style.cursor = 'not-allowed';
        element.innerHTML = 'Not Matched';
        element.disabled = true;
        var myFunction = function () {
          element.style.cursor = 'pointer';
          element.innerHTML = 'Verify Captcha';
          element.style.backgroundColor = '#01bf71';
          element.disabled = false;
          inputData.disabled = false;
          setCaptcha(generateString(6));
        };
        setTimeout(myFunction, 2000);
      }
    };
    setTimeout(myFunctions, 2000);
  };

  const onRegenerate = () => {
    setCaptcha(generateString(6));
  };
  return (
    <>
      <div className="flex w-[70%] ">
        <div className="flex mx-auto">
          <input
            type="text"
            id="captcha"
            value={captcha}
            readOnly
            style={{ backgroundImage: `url(${captchaBg})` }}
            className="w-[40%] mr-2 sm:w- min-w-[70px] text-black tracking-wider text-center pointer-events-none bg-cover bg-center blur-[1.4px] border border-gray-300 rounded-lg"
          />
          <button type="button" id="regenerateBTN" onClick={onRegenerate} disabled={trackState}>
            <FiRefreshCcw size="1.5em" />
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter Captcha"
          name="username"
          id="inputType"
          onChange={handleCaptcha}
          autoComplete="off"
          className="w-[70%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-black"
        />
      </div>
      <div className="flex mx-auto mt-[0.8rem] flex-row space-x-4 py-0 w-[55%]">
        <button
          type="button"
          id="succesBTN"
          onClick={onSubmit}
          className="block w-[9rem] text-base mx-auto py-1 bg-[#01bf71] text-white rounded-full hover:bg-[#00492B] font-regular transition-all duration-300 ease-in-out"
        >
          Verify Captcha
        </button>
      </div>
    </>
  );
};

export default Captcha;
