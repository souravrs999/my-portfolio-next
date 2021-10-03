const Container: React.FC = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-500">
      <div className="flex flex-col justify-center items-center w-full h-screen bg-no-repeat bg-cover felx-col bg-body-background">
        <div className="flex justify-center items-center w-full max-w-6xl lg:space-x-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
