function Button({ children,isRunning, type, onClick }) {

if(type == "reset"){
    return (
        <button
          onClick={onClick}
          className={`border-[1px] border-[#e3bf8a] rounded-md px-3 py-2 transition-all `}
        >
          {children}
        </button>
      );
}

  return (
    <button
      onClick={onClick}
      className={`border-0 rounded-md px-3 py-2 bg-[${
        isRunning ? "#ef4444" : "#211A11"
      }]   transition-all text-white`}
    >
      {children}
    </button>
  );
}

export default Button;
