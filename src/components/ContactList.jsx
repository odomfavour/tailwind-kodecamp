import { contacts } from "../utils/data";
import More from "../assets/Icons/more.svg";
import NewChat from "../assets/Icons/new-chat.svg";
import Search from "../assets/Icons/search-icon.svg";
import moment from "moment";

// eslint-disable-next-line react/prop-types
function ContactList({ onSelectContact, setChatOpen }) {
  return (
    <div className="contact-list font-Inter h-full">
      <div className="msg-header flex justify-between pt-[18px] pr-[15px] pl-[24px] pb-[16px] content-center">
        <p className="md:text-[18px] lg:text-[24px] font-bold font-Inter">
          Messaging
        </p>
        <div className="svg-msg-header">
          <img className="inline" src={More} alt="" />
          <img className="inline ml-[16px]" src={NewChat} alt="" />
        </div>
      </div>
      <div className="line h-[1px] w-full bg-[#B7D1F8]"></div>
      <div className="msg-search-bar pb-[20px]">
        <div className="input-wrapper flex bg-white mt-[14px] pl-3 mx-[21px] rounded-[5px]">
          <img className="pr-3" src={Search} alt="" />
          <input
            className="bg-transparent border-none focus:outline-none w-full md:text-[14px] lg:text-[16px]"
            placeholder="Search messages"
            // value={input}
            // onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="contain-contact overflow-y-auto h-[80%]">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="contact"
            onClick={() => {
              onSelectContact(contact);
              setChatOpen(true);
            }}
          >
            <div className="contact-whole flex justify-between pl-[18px] pt-[12px] max-[768px]:pb-[12px] pb-[22px]">
              <div className="contact-info flex">
                <div className="contact-img mr-[16.55px]">
                  <img src={contact.img} alt="" />
                </div>
                <div className="contact-text">
                  <h3 className="text-[14px] font-bold leading-4 mb-4 pt-2">
                    {contact.name}
                  </h3>
                  <p className="text-[12px] w-[212px] font-light">
                    {contact.messages[contact?.messages.length - 1].text}
                  </p>
                </div>
              </div>
              <div className="contact-delivery text-[12px] font-light md:mr-3">
                <p>
                  {moment(
                    contact.messages[contact?.messages.length - 1].timestamp
                  ).format("HH:mm")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
