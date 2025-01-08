function Button({ children, isRunning, isActive=true, type, onClick }) {

if(type == "normal"){
    return (
        <button
          onClick={onClick}
          disabled={!isActive}
          className={`border-[0px] rounded-md px-3 py-2 bg-primary-dark transition-all flex justify-center items-center ${!isActive ? "text-[#4a4946] border-transparent" : "border-secondary-dark"} ${
            isActive && "active:bg-primary-light"
          }`}
        >
          {children}
        </button>
      );
}

  return (
    <button
      onClick={onClick}
      className={`border-0 rounded-md px-3 py-2 flex justify-center items-center ${
        isRunning ? "bg-[#ef4444]" : 'bg-secondary-dark'
      } transition-all text-white`}
    >
      {children}
    </button>
  );
}

export default Button;
