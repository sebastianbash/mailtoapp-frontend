import { AiOutlineArrowsAlt, AiOutlineClose, AiOutlineLine } from "react-icons/ai";

const index = () => {
  return (
    <div className="w-full h-full flex items-center justify-center border-4 border-red-600">
      <div className="container flex items-center justify-center border-4 border-green-500">
        <div className="border-4 rounded-lg w-1/2 border-black bg-[#1a1a1a]">
          <form>
            <div className="title w-full flex flex-row justify-between items-center bg-gray-500">
              <span className="uppercase text-white font-bold">New Email</span>
              <div>
                <ul className="flex">
                  <li><AiOutlineLine /></li>
                  <li><AiOutlineArrowsAlt /></li>
                  <li><AiOutlineClose /></li>
                </ul>
              </div>
            </div>
            <div className="to">
              <span>to:</span>
              <input type="text" name="to" placeholder="Email Destiny" />
            </div>
            <div className="subject">
              <span>cc:</span>
              <input type="text" name="cc" placeholder="Subject" />
            </div>
            <div className="subject">
              <span>bcc:</span>
              <input type="text" name="bcc" placeholder="Subject" />
            </div>
            <div className="subject">
              <span>subject</span>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="message">
              <span>message:</span>
              <input type="text" name="body" placeholder="Email Destiny" />
            </div>
            <button type="submit" className="copy-mail">
              Copy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
