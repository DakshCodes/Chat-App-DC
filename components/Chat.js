import { auth } from '@/firebase';
import getRecipientEmail from '@/utills/getRecipientEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { query, where } from "firebase/firestore";

const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth);

  const usersRef = collection(db, "users");
  const [recipientSnapshot] = useCollection(query(usersRef, where("email", "==", getRecipientEmail(users, user))))


  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientsEmail = getRecipientEmail(users, user);


  const recipientEmail = getRecipientEmail(users, user);

  return (
    <div className='flex items-center text-center cursor-pointer p-[15px] break-words hover:bg-[#e9eaeb]'>
      {
        recipient ? (
          <AccountCircleIcon src={recipient?.photoURL} className='m-[5px] mr-[15px] ' fontSize='large' />
        ) : (

          <AccountCircleIcon  className='m-[5px] mr-[15px] ' fontSize='large'>{recipientEmail[0]}</AccountCircleIcon>
        )
      }
      <p className='text-center'>{recipientEmail}</p>
    </div>
  )
}

export default Chat
