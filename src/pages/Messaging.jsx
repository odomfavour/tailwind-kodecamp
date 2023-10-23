import { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import ChatArea from "../components/ChatArea";
import "../App.css";
import MainLayout from "../components/layout/MainLayout";

const Messaging = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {};
  }, []);

  return (
    <MainLayout isLoggedIn={true}>
      <div className="Messaging  flex w-[90%] mx-auto mt-[38px] justify-between bg-[white] h-[calc(100vh-142px)] font-Inter">
        {isMobile && !chatOpen && (
          <div className="sidebar w-full lg:w-[30%] bg-[#F5F5F5] rounded-[10px]">
            <ContactList
              onSelectContact={(contact) => {
                setSelectedContact(contact);
                setChatOpen(true);
              }}
              setChatOpen={setChatOpen}
            />
          </div>
        )}
        {!isMobile && (
          <div className="sidebar w-[30%] bg-[#F5F5F5] rounded-[10px]">
            <ContactList
              onSelectContact={(contact) => setSelectedContact(contact)}
            />
          </div>
        )}

        {isMobile && chatOpen && (
          <div className="main-content w-full lg:w-[69%] bg-[#F5F5F5] rounded-[10px]">
            <ChatArea
              selectedContact={selectedContact}
              setChatOpen={setChatOpen}
            />
          </div>
        )}
        {!isMobile && (
          <div className="main-content w-[69%] bg-[#F5F5F5] rounded-[10px]">
            <ChatArea selectedContact={selectedContact} />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Messaging;
