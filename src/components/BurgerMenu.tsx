import { BurgerMenuProps } from '@/@types';
import clsx from 'clsx';
import Button from './ui/Button';
import NavMenu from './NavMenu';

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  handleMenuToggled,
  className,
}) => {
  return (
    <div
      id="navbar"
      className={clsx(
        'w-full h-screen absolute top-0 left-1/2 transform -translate-x-1/2 z-30  box-border pt-8 px-5 bg-gray-900 bg-opacity-90',
        className
      )}
    >
      <div
        className="w-full flex justify-end items-center"
        onClick={handleMenuToggled}
      >
        <div>
          <div>
            <Button className="" type="button" onClick={handleMenuToggled}>
              CLOSE
            </Button>
          </div>
        </div>
      </div>

      <NavMenu
        classNameList="h-full w-full flex flex-col items-center text-center gap-12 pt-32"
        classNameLink='text-xl'
        onMenuToggled={handleMenuToggled}
      />
    </div>
  );
};

export default BurgerMenu;


