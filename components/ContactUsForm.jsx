function ContactUsForm() {
  return (
    <form className=" space-y-8 px-8 text-[#0a1d30]">
      <div className="flex flex-col  justify-center ">
        <label className="text-lg font-bold ">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="border w-full px-4 py-2 outline-none border-gray-400 rounded-sm"
          required
        />
      </div>

      <div className="flex flex-col justify-center ">
        <label className="text-lg font-bold">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border w-full px-4 py-2 outline-none border-gray-400 rounded-sm"
          required
        />
      </div>

      <div className="flex flex-col justify-center ">
        <label className="text-lg font-bold">Name</label>
        <textarea
          type="text"
          placeholder="Enter Your Message"
          className="border w-full px-4 py-2 outline-none border-gray-400 rounded-sm"
          required
        />
      </div>

      <button
        className="outline-none text-center font-bold text-xl
            bg-[#0a1d30] text-gray-50 px-4 py-2 w-full hover:scale-105 
           transition-all duration-100"
      >
        Send
      </button>
    </form>
  );
}

export default ContactUsForm;
