const SuccessMessageModal = () => {
  return (
    <div className="relative inset-0 flex items-center justify-center">
      <div
        className="w-1/2 md:w-1/3 absolute bottom-14 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/bg-hero.png)',
        }}
      >
        <p className="py-8 md:py-12 ml:py-24 text-2xl font-thin">
          Successfull!
        </p>
      </div>
    </div>
  );
};

export default SuccessMessageModal;
