import Image from "next/image";

function Header() {
  return (
    <header className="flex p-5 justify-start top-0 sticky bg-white z-50 shadow-md">
      {/* left section */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          height={30}
          width={30}
          alt="logo"
        />

        <div>
            <h1 className="font-bold">
                <span className=" text-violet-500">AI</span> Image Generator
            </h1>
            <h2 className="text-xs">
                Powered by DALL-E 2, ChatGPT and Azure
            </h2>
        </div>
      </div>

      {/* right section */}
    </header>
  );
}

export default Header;
