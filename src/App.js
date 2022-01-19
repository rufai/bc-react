import logo from './logo.svg';
import './App.css';
import { Adverts, Greeting  } from './components/adverts';
import Profile from './components/profileview';
import FeedPost from './components/feedpost';
import Navigation from './components/navigation';
import ChatBar from './components/chatbar';
import CompanyPage from './components/companypages';
import BookCounter from './components/BookCounter';
// components
// function that returns ui ( html element and css )

// App
function App() {
  return (
    <section>
      <BookCounter />
      <Navigation />  
      <CompanyPage />
      <ChatBar />
      <FeedPost />
      <Adverts /> 
      <Greeting name="Janine" className="alibaba" id="amazon" alt="headset" />
      <img src="" alt="" width="" height="" id="" className=''/>
    </section>
  )
}

export default App;
