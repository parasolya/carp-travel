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
        'w-full h-screen container absolute -top-9 left-1/2 transform -translate-x-1/2 z-30   bg-gray-900 bg-opacity-90',
        className
      )}
    >
      <div
        className="w-full mt-[39px] flex justify-end items-center"
      >
        <Button className="" type="button" onClick={handleMenuToggled}>
          CLOSE
        </Button>
      </div>

      <NavMenu
        classNameList="h-full w-full flex flex-col items-center text-center gap-12 pt-32"
        classNameLink="text-xl"
        onMenuToggled={handleMenuToggled}
      />
    </div>
  );
};

export default BurgerMenu;
