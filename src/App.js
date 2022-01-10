import logo from './logo.svg';
import './App.css';
import Adverts from './components/adverts';
import Profile from './components/profileview';
import FeedPost from './components/feedpost';
import Navigation from './components/navigation';
import ChatBar from './components/chatbar';
import CompanyPage from './components/companypages';
// components
// function that returns ui ( html element and css )

// App
function App() {
  return (
    <section>
      <Navigation />
      <Profile />
      <CompanyPage />
      <ChatBar />
      <FeedPost />
      <Adverts /> 
    </section>
  )
}

export default App;
