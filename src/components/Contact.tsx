import Title from "./Title";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 lg:p-0">
      <Title>CONTACT</Title>
      <form action="" className="flex flex-col gap-4 ">
        <label htmlFor="name" className="hidden">
          Emaill
        </label>
        <input id="name" name="name" className="bg-white dark:bg-dark-blue p-4 rounded outline-none" placeholder="Name..." type="text" />
        <label htmlFor="email" className="hidden">
          Emaill
        </label>
        <input id="email" name="email" className="bg-white dark:bg-dark-blue p-4 rounded outline-none" placeholder="Email Address..." type="text" />
        <label htmlFor="content" className="hidden">
          Emaill
        </label>
        <textarea id="content" name="content" className="bg-white dark:bg-dark-blue p-4 rounded outline-none" placeholder="Content..." rows={10}></textarea>
        <div className="flex justify-center">
          <button className="bg-primary text-white py-2 px-4 rounded">SEND</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
