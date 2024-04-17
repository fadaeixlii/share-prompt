import Feed from "@/components/Feed";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eligendi
        excepturi. Ipsum harum eos dolores impedit provident. Iste reiciendis
        ipsam in autem sunt at vel enim officia voluptatibus? Dicta, ad!
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default HomePage;
