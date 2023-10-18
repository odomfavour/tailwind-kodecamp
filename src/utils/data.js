import moment from 'moment';
import ellipse1 from '../assets/images/Ellipse 41.svg'
import ellipse2 from '../assets/images/Ellipse 50.svg'
import ellipse3 from '../assets/images/Ellipse 55.svg'
import ellipse4 from '../assets/images/Ellipse 67.svg'
import ellipse5 from '../assets/images/Ellipse 68.svg'
import ellipse6 from '../assets/images/Ellipse 69.svg'

import dev from "/src/assets/images/developer.png";
import dev1 from "/src/assets/images/developer1.png";
import dev2 from "/src/assets/images/developer2.png";
import dev3 from "/src/assets/images/developer3.png";
import dev4 from "/src/assets/images/developer4.png";
import dev5 from "/src/assets/images/developer5.png";
import dev6 from "/src/assets/images/developer6.png";
import dev7 from "/src/assets/images/developer7.png";
import dev8 from "/src/assets/images/developer8.png";
import dev9 from "/src/assets/images/developer9.png";
import dev10 from "/src/assets/images/developer10.png";
import dev11 from "/src/assets/images/developer11.png";
import dev12 from "/src/assets/images/developer12.png";
import dev14 from "/src/assets/images/developery.png";
import dev15 from "/src/assets/images/developer15.png";
import dev16 from "/src/assets/images/developer16.png";
import dev17 from "/src/assets/images/developer17.png";
import dev18 from "/src/assets/images/developer18.png";
import dev19 from "/src/assets/images/developer19.png";
import dev20 from "/src/assets/images/developer20.png";
import dev21 from "/src/assets/images/developer21.png";
import dev22 from "/src/assets/images/developer22.png";
import dev23 from "/src/assets/images/developer23.png";
import dev24 from "/src/assets/images/developer24.png";
import dev26 from "/src/assets/images/developer26.png";
import dev27 from "/src/assets/images/developer27.png";
import dev28 from "/src/assets/images/developer28.png";
import dev29 from "/src/assets/images/developer29.png";
import dev30 from "/src/assets/images/developer30.png";
import dev31 from "/src/assets/images/developer31.png";
import dev25 from "/src/assets/images/developerx.png";

import msgOdunlami from "../assets/images/msg-Odunlami.png";
import msgAishat from "../assets/images/msg-Aishat.png";
import msgKolade from "../assets/images/msg-Kolade.png";
import msgOrji from "../assets/images/msg-Orji.png";
import msgKweku from "../assets/images/msg-Kweku.png";
import msgOkafor from "../assets/images/msg-Okafor.png";
import msgAdewole from "../assets/images/msg-Adewole.png";





export const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Recruits", url: "/recruits" },
  { id: 2, name: "Recruits", url: "/" },
  { id: 3, name: "About Us", url: "/about" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Blog", url: "/blog" },
];

export const loggedIn = [
  { id: 1, name: "Message", url: "/" },
  { id: 2, name: "Notification", url: "/about" },
  { id: 3, name: "Profile", url: "/contact" },
  { id: 4, name: "Logout", url: "/blog" },
];

export const devTeam = [
  {
    id: 1,
    NAME: "Adebambo Jadesola",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev16,
  },
  {
    id: 2,
    NAME: "Odunlami Oluwafemi",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev,
  },
  {
    id: 3,
    NAME: "Musa Amoda",
    experience: 2,
    LOCATION: "Lagos, Nigeria",
    Image: dev12,
  },
  {
    id: 4,
    NAME: "Mundung Weng",
    experience: 1,
    LOCATION: "Jalingo, Nigeria",
    Image: dev18,
  },
  {
    id: 5,
    NAME: "Obi Chimeze",
    experience: 2,
    LOCATION: "Owerri, Nigeria",
    Image: dev3,
  },
  {
    id: 6,
    NAME: "Aishat Muibudeen",
    experience: 1,
    LOCATION: "Ibadan, Nigeria",
    Image: dev8,
  },
  {
    id: 7,
    NAME: "Daramola Adesewa",
    experience: 1,
    LOCATION: "Abuja, Nigeria",
    Image: dev5,
  },
  {
    id: 8,
    NAME: "Isreal Clement",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev2,
  },
  {
    id: 9,
    NAME: "Bakare Shakiroh",
    experience: 1,
    LOCATION: "Abuja, Nigeria",
    Image: dev7,
  },
  {
    id: 10,
    NAME: "Adewole Michael",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev9,
  },
  {
    id: 11,
    NAME: "Kolade Oulwatosin",
    experience: 1,
    LOCATION: "Benin-city, Nigeria",
    Image: dev10,
  },
  {
    id: 12,
    NAME: "Garba Abigail",
    experience: 2,
    LOCATION: "Auchi, Nigeria",
    Image: dev11,
  },
  {
    id: 13,
    NAME: "Egbe Ethan",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev1,
  },
  {
    id: 14,
    NAME: "Soronnadi Lois",
    experience: 1,
    LOCATION: "Asaba, Nigeria",
    Image: dev4,
  },
  {
    id: 15,
    NAME: "Fiiwe Barisanem",
    experience: 3,
    LOCATION: "PH-city, Nigeria ",
    Image: dev24,
  },
  {
    id: 16,
    NAME: "Amadi Augustina",
    experience: 2,
    LOCATION: "Aba, Nigeria",
    Image: dev25,
  },
  {
    id: 17,
    NAME: "Abubakar Mistura",
    experience: 3,
    LOCATION: "Kano, Nigeria",
    Image: dev14,
  },
  {
    id: 18,
    NAME: "Ayodele Rafael",
    experience: 2,
    LOCATION: "Akure, Nigeria",
    Image: dev15,
  },
  {
    id: 19,
    NAME: "Atinyoh Imokha",
    experience: 1,
    LOCATION: "Lafia, Nigeria",
    Image: dev6,
  },
  {
    id: 20,
    NAME: "Charles Imoh",
    experience: 2,
    LOCATION: "Makurdi, Nigeria",
    Image: dev19,
  },
  {
    id: 21,
    NAME: "Park Lu Chen",
    experience: 3,
    LOCATION: "Lagos, Nigeria",
    Image: dev30,
  },
  {
    id: 19,
    NAME: "Idris Matilda",
    experience: 2,
    LOCATION: "Abeokuta, Nigeria",
    Image: dev29,
  },
  {
    id: 20,
    NAME: "Coker Thompson",
    experience: 3,
    LOCATION: "Lagos, Nigeria",
    Image: dev31,
  },
  {
    id: 21,
    NAME: "Okonkwo Kenneth",
    experience: 2,
    LOCATION: "Uyo, Nigeria",
    Image: dev26,
  },
  {
    id: 19,
    NAME: "Bayero Funmilola",
    experience: 2,
    LOCATION: "Sokoto, Nigeria",
    Image: dev28,
  },
  {
    id: 20,
    NAME: "Adeleke Oyindamola",
    experience: 1,
    LOCATION: "Lagos, Nigeria",
    Image: dev27,
  },
  {
    id: 21,
    NAME: "Shuaib Adebimpe",
    experience: 3,
    LOCATION: "Ilorin, Nigeria",
    Image: dev20,
  },
  {
    id: 22,
    NAME: "Abdullahi Danlad",
    experience: 3,
    LOCATION: "Zaria, Kaduna",
    Image: dev22,
  },
  {
    id: 23,
    NAME: "Moses Trabaye",
    experience: 1,
    LOCATION: "Bauchi, Nigeria",
    Image: dev21,
  },
  {
    id: 23,
    NAME: "Nuel Adepoju",
    experience: 2,
    LOCATION: "Ijebu-ode, Nigeria",
    Image: dev23,
  },
];

export const tabTitles = [
  {
    id: 1,
    title: "Personal Details",
  },
  {
    id: 2,
    title: "Experience",
  },
  {
    id: 3,
    title: "Personal Reviews",
  },
];

export const topRecruits = [
  { id: 1, name: 'Kolade Maya', track: 'Backend Developer', img: ellipse3 },
  {
    id: 2, name:
      'Odunlami Oluwafemi', track: 'UI/UX', img: ellipse1
  },
  { id: 3, name: 'Bakare Aishat', track: 'Frontend Developer', img: ellipse2 },
  { id: 4, name: 'Temitope Fabian', track: 'CAD', img: ellipse4 },
  { id: 5, name: 'Daramola Adesanya', track: 'Product Management', img: ellipse5 },
  { id: 6, name: 'Orji Clement', track: 'CAD', img: ellipse6 }
];

const specificTime = moment().set({ hour: 9, minute: 15, second: 0, millisecond: 0 });

export const contacts = [
  {
    id: 1,
    name: 'Odunlami Oluwafemi',
    img: msgOdunlami,
    lastMessage: 'Hello!',
    messages: [
      { text: 'Hello!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Hi there!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  {
    id: 2,
    name: 'Aishat Muibudeen',
    img: msgAishat,
    lastMessage: 'Hi there!',
    messages: [
      { text: 'Hi there!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'How are you?', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  // Add more contacts here
  {
    id: 3,
    name: 'Kolade Maya',
    img: msgKolade,
    lastMessage: 'Hey!',
    messages: [
      { text: 'Hey!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Hello!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  {
    id: 4,
    name: 'Orji Clement',
    img: msgOrji,
    lastMessage: 'Good morning!',
    messages: [
      { text: 'Good morning!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Good morning!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  {
    id: 5,
    name: 'Kweku Frimpong',
    img: msgKweku,
    lastMessage: 'Howdy!',
    messages: [
      { text: 'Howdy!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Hi!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  {
    id: 6,
    name: 'Okafor Mary',
    img: msgOkafor,
    lastMessage: 'Good evening!',
    messages: [
      { text: 'Good evening!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Good evening!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
  {
    id: 7,
    name: 'Adewole Michelle',
    img: msgAdewole,
    lastMessage: 'Good evening!',
    messages: [
      { text: 'Good evening!', sender: 'contact', timestamp: specificTime.toISOString() },
      { text: 'Good evening!', sender: 'me', timestamp: specificTime.toISOString() },
    ],
  },
];


// console.log(specificTime.toISOString())