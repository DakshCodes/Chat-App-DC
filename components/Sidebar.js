// Icons for Projects
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';
import { Button } from '@mui/material';
import { auth, db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, where } from "firebase/firestore";
import Chat from './Chat';


const Sidebar = () => {

  const [user, loading] = useAuthState(auth);
  // Create a reference to the cities collection
  const citiesRef = collection(db, "chats");
  // Create a query against the collection.
  const q = query(citiesRef, where("users", "array-contains", user.email));
  const [chatSnapshot] = useCollection(q);

  const chatadd = () => {
    const input = prompt(
      "Please Enter Email Address for The User You Wish To Chat"
    );
    if (!input) return null;

    if (EmailValidator.validate(input) && !chatAlreadyExist(input) && input !== user.email) {
      // We Need To add The Chat Into DB  "chats" Collection and its check its exist or noyt
      setDoc(doc(db, "chats", user.uid), {
        users: [user.email, input],
      }, { merge: true });
    }

  }

  const chatAlreadyExist = (recipientEmail) => {
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  }
  return (
    <div>
      {/* nav */}
      <div className='flex sticky top-0 z-[1] bg-white justify-between p-[15px] h-[80px] items-center border-b-[1px] border-solid border-white'>
        <div onClick={() => auth.signOut()}>
          <AccountCircleIcon src={user.photoURL} className='cursor-pointer hover:opacity-[0.8]' />
        </div>
        <div>
          <button>
            <ChatIcon />
          </button>
          <button>
            <MoreVertIcon />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className='p-[20px]  flex items-center rounded-[2px]'>
        <SearchIcon />
        <input placeholder='Search In Chat' className='outline-none border-none flex-1' />
      </div>

      <Button onClick={chatadd} className='w-full border-solid border-t-[1px] border-b-[1px] border-b-slate-200 border-t-slate-200 '>Start A New Chat</Button>

      {/* List Of Chat */}
  
       {
        chatSnapshot?.docs.map((chat) =>(
          <Chat key={chat.id} id={chat.id} users={chat.data().users}  />
        ))
       }
    </div>
  )
}

export default Sidebar
