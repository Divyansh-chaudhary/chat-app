"use client";
import { MenuIcon } from "@/icons";
import { openDrawer } from "@/redux/features/globalSlice";
import { useAppDispatch } from "@/redux/hooks";

export function MenuOpener() {
  const dispatch = useAppDispatch();

  const showFriendsList = () => {
    dispatch(openDrawer());
  };

  return (
    <div
      role="button"
      onClick={showFriendsList}
      className="md:hidden cursor-pointer"
    >
      <MenuIcon />
    </div>
  );
}
