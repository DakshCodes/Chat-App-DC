import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
  <center className="flex w-screen h-screen justify-center items-center">
    <div className="flex flex-col gap-16 items-center justify-center">
        <img 
        className="w-60"
        src="https://tse3.mm.bing.net/th?id=OIP.e9Ys7Glv-O2H2CNbMRB6KwHaHa&pid=Api&P=0" 
        alt="" 
        style={{marginBottom:10}}
        />        
        <ClipLoader color="#13ff00" size={55} />
    </div>
  </center>
  )
}

export default Loading
