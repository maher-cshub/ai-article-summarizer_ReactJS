import { useState } from "react";
import { linkIcon } from "../assets";

function MainContent() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <section
      className="flex flex-col w-full h-screen"
      id="main-content"
      style={{
        transition: "scrollIntoView 10s ease-in-out",
      }}
    >
      <section className="flex flex-col w-full gap-3 mx-auto mt-10 ">
        <form
          className="flex flex-row flex-wrap items-center justify-center h-full gap-1 pl-2 mx-auto rounded-lg bg-secondary"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            height={20}
            width={20}
            alt=""
            className="relative left-0"
          />
          <input
            type="text"
            placeholder="Type here"
            value={article.url}
            className="h-full bg-secondary w-[400px] focus:outline-none"
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
          />
          <button
            className="h-[50px] p-2 bg-secondary hover:bg-primary rounded rounded-l-none"
            type="submit"
          >
            Summarize
          </button>
        </form>
      </section>

      <section className="flex flex-row flex-wrap gap-3 mt-10 place-items-start w-[80%] mx-auto bg-primary opacity-50 h-[20%] rounded-[10px] max-w-[1000px]">
        History
      </section>
      <section className="flex flex-row flex-wrap gap-3 mt-10 place-items-start w-[80%] mx-auto bg-primary opacity-50 h-[60%] rounded-[10px] max-w-[1000px] mb-10">
        Summarized Text
      </section>
    </section>
  );
}

export default MainContent;
