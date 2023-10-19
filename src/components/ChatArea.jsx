import { useState, useEffect } from "react";
import Video from "../assets/Icons/video.svg";
import More from "../assets/Icons/more.svg";
import moment from "moment";
import Me from "../assets/images/me.png";
import Mic from "../assets/Icons/mic.svg";
import Emojis from "../assets/Icons/emojis.svg";
import { FiArrowLeft } from "react-icons/fi";

// Import the CSS file for ChatArea

function ChatArea({ selectedContact, setChatOpen }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load chat history when a contact is selected
    if (selectedContact) {
      setMessages(selectedContact.messages);
    } else {
      setMessages([]); // Clear messages when no contact is selected
    }
  }, [selectedContact]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage && selectedContact) {
      const updatedMessages = [
        ...messages,
        { text: newMessage, sender: "me", timestamp: new Date().toISOString() },
      ];
      setMessages(updatedMessages);
      selectedContact.messages = updatedMessages; // Save messages to the selected contact (you can use a database in a real app)
      setNewMessage("");
    }
  };

  return (
    <div className="chat-area h-full relative">
      {selectedContact ? (
        <>
          <div className="chat-header flex justify-between pl-3 lg:pl-[50px] py-4 items-center">
            <div className="chat-header-text font-bold text-[14px] lg:text-[24px]">
              {selectedContact && (
                <button
                  className="inline-block lg:hidden pr-5"
                  onClick={() => {
                    setChatOpen(false);
                  }}
                >
                  <FiArrowLeft />
                </button>
              )}
              <h2 className="inline-block">{selectedContact.name}</h2>
            </div>
            <div className="chat-header-svg">
              <img className="inline-block" src={More} alt="" />
              <img className="inline-block pr-2 ml-4" src={Video} alt="" />
            </div>
          </div>
          <div className="line h-[1px] w-full bg-[#B7D1F8]"></div>
          <div className="message-list overflow-y-auto h-[80%] px-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message max-[768px]:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] max-h-500px  bg-white rounded-[5px] pt-[13px] lg:pt-[19px] pb-2 lg:pb-[13px] max-[768px]:pl-3 lg:pl-[22px] md:pl-[22px] max-[768px]:pr-3 md:pr-[22px] lg:pr-[29px] my-3 lg:my-6 ${
                  message.sender === "me" ? "message-sent" : "message-received"
                }`}
              >
                <div className="msg">
                  {message.sender === "me" ? (
                    <div className="message-sender me">
                      <div className="flex text-black items-center mb-2 lg:mb-5">
                        <div className="msg-text">
                          <p className="text-[12px] lg:text-[16px] font-bold pr-3 text-right pb-1">
                            Rhema Nwoko
                          </p>
                          <div className="text-[12px] text-right lg:text-[16px] font-normal text-[#2B2B2B]">
                            {message.text}
                          </div>
                        </div>
                        <div className="msg-img ml-4">
                          <img src={Me} alt="" />
                        </div>
                      </div>
                      <div className="message-timestamp text-[#2B2B2B] text-xs font-light">
                        {moment(message.timestamp).format("HH:mm")}
                      </div>
                    </div>
                  ) : (
                    <div className="message-sender">
                      <div className="flex  text-black items-center mb-2 lg:mb-5">
                        <div className="msg-img mr-4">
                          <img src={selectedContact.img} alt="" />
                        </div>
                        <div className="msg-text">
                          <p className="text-[12px] lg:text-[16px] font-bold pl-3 text-left pb-1">
                            {selectedContact.name}
                          </p>
                          <div className="text-[12px] lg:text-[16px] font-normal text-[#2B2B2B]">
                            {message.text}
                          </div>
                        </div>
                      </div>
                      <div className="message-timestamp text-right text-[#2B2B2B] text-xs font-light">
                        {moment(message.timestamp).format("HH:mm")}
                      </div>
                    </div>
                  )}
                </div>
                {/* <div className="msg-img">
                  {message.sender === "me" ? (
                    <div className="me-img">
                      <img src={Me} alt="" />
                    </div>
                  ) : (
                    <div className="contact-img">
                      <img src={selectedContact.img} alt="" />
                    </div>
                  )}
                </div> */}
              </div>
            ))}
          </div>
          <div className="input-area w-[90%] mx-auto bg-white flex mt-3 rounded-[5px]">
            <form
              onSubmit={handleSendMessage}
              action=""
              className="w-[93%] px-4 py-2"
            >
              <input
                className="bg-transparent border-none focus:outline-none w-full text-[16px]"
                type="text"
                placeholder="Write a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </form>
            <img src={Mic} alt="" />
            <img className="ml-3" src={Emojis} alt="" />

            {/* <button onClick={handleSendMessage}>Send</button> */}
          </div>
        </>
      ) : (
        <div className="no-contact-selected absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          Select a contact to start chatting.
        </div>
      )}
    </div>
  );
}

export default ChatArea;
