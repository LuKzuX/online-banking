const Footer = () => {
  return (
    <div className="main-color ">
      <div className="mx-auto grid grid-cols-2 gap-10 px-10 justify-center items-center py-10 mt-10 text-white  max-w-[1024px]">
        <div className="flex flex-col items-center gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Title One</h1>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Title Two</h1>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Title Three</h1>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Title Four</h1>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center bg-neutral-900 text-center text-white py-4">
        <p className="text-sm">&copy; 2024 Online Bank</p>
      </div>
    </div>
  );
};

export default Footer;
