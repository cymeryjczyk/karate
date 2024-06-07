type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; Samurai Showdown 2024. All rights reserved.
            </p>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;