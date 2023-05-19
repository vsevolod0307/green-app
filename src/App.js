import './App.css';
import Chat from './components/Chat/chat';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className='whatsapp'>
      <Sidebar/>
      <Chat/>
    </div>
  )
}

export default App;
