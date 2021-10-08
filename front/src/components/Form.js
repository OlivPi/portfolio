import '../App';
import React, {useState} from "react";


export default function Form() {

  const [status, setStatus] = useState("Envoyer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };



    let response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Envoyer");
    let result = await response.json();
    alert(result.status);
  };

    return(

    <div className='bg-black'>
      <section className="text-gray-700 body-font relative">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              Exposez moi vos besoins et je reviendrais vers vous très prochainement.
            </p>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit">
                  {status}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    
    )
}


